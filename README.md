# FLOW:

## User requests OTP

### ↓

## Acknowledge request

### ↓

## Generate code, save code on backend (Firebase)

### ↓

## Text user a code (Twilio)

### ↓

## User sends correct code

### ↓

## Compare codes on the server

### ↓

## Send user a JWT to identify them (Firebase)

# Tech Stack

## React Native

## Twilio:

### _Send text messages to users_

## Firebase:

### _Store user data, including users accounts and correct OTP codes_

## Google Cloud Functions:

### _Access data in Firebase with custom logic_
