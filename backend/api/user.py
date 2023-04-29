from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    password = Column(String(255))
    name = Column(String(50))
    bio = Column(String(500), default='')
    created_at = Column(DateTime, default=datetime.now)
    messages_sent = relationship('Message', back_populates='sender', lazy='dynamic', foreign_keys='Message.sender_id')
    messages_received = relationship('Message', back_populates='receiver', lazy='dynamic', foreign_keys='Message.receiver_id')

class Message(Base):
    __tablename__ = 'messages'

    id = Column(Integer, primary_key=True, index=True)
    sender_id = Column(Integer, ForeignKey('users.id'))
    receiver_id = Column(Integer, ForeignKey('users.id'))
    content = Column(String(1000))
    sent_at = Column(DateTime, default=datetime.now)
    sender = relationship('User', back_populates='messages_sent', foreign_keys=[sender_id])
    receiver = relationship('User', back_populates='messages_received', foreign_keys=[receiver_id])

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
from database import get_db
from models import User, Message
from auth import create_access_token, verify_password, get_current_user

router = APIRouter()

@router.post('/register')
def register(username: str, password: str, name: str):
    user = User(username=username, password=password, name=name)
    db.add(user)
    db.commit()
    db.refresh(user)
    access_token = create_access_token({'sub': user.username})
    return {'access_token': access_token}

@router.post('/login')
def login(username: str, password: str):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=400, detail='Invalid username')
    if not verify_password(password, user.password):
        raise HTTPException(status_code=400, detail='Invalid password')
    access_token = create_access_token({'sub': user.username})
    return {'access_token': access_token}

@router.post('/messages')
def send_message(content: str, receiver_username: str, current_user: User = Depends(get_current_user)):
    receiver = db.query(User).filter(User.username == receiver_username).first()
    if not receiver:
        raise HTTPException(status_code=400, detail='Invalid receiver username')
    message = Message(sender_id=current_user.id, receiver_id=receiver.id, content=content)
    db.add(message)
    db.commit()
    db.refresh(message)
    return {'id': message.id}
