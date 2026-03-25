# AWS VPC Quiz Chatbot

An interactive conversational quiz bot that tests users on **AWS VPC and networking concepts** - built using Amazon Lex, AWS Lambda, and Amazon S3.

Built as part of the **Praesignis AWS re/Start Programme - Project 3** for CloudLearners Inc.

## Overview

Users interact with the bot through natural language, answer 15 multiple-choice questions across Beginner and Intermediate difficulty levels, and receive instant feedback with explanations. Score is tracked across the full session.


## Architecture

```
User Input
    │
    ▼
┌─────────────────┐
│   Amazon Lex    │  ← Manages conversation flow and intent recognition
│  (VPCQuizBot)   │
└────────┬────────┘
         │ Fulfillment trigger
         ▼
┌─────────────────┐
│  AWS Lambda     │  ← Evaluates answers, tracks score, fetches next question
│ (VPCQuizHandler)│
└────────┬────────┘
         │ boto3 SDK (S3 GetObject)
         ▼
┌─────────────────┐
│   Amazon S3     │  ← Stores quiz_questions.json (question bank)
│  (Quiz Bucket)  │
└─────────────────┘
```

| Service | Role |
|--|--|
| **Amazon Lex V2** | Understands user input, manages intents and conversation flow |
| **AWS Lambda** | Evaluates answers, tracks score, fetches questions (Python 3.12) |
| **Amazon S3** | Stores the private JSON question bank |
| **AWS IAM** | Scoped role with least-privilege S3 and CloudWatch permissions |
| **Amazon CloudWatch** | Lambda execution logging |


## Features

- 🗣️ Natural language interface - recognises varied phrases like *"start quiz"*, *"quiz me"*, *"let's start"*
- ✅ Instant answer feedback with explanations
- 📊 Score tracking across all 15 questions via Lex session attributes
- 🎓 Two difficulty tiers - 7 Beginner and 8 Intermediate questions
- 🔒 Private S3 bucket accessed via IAM role (no public URLs)
- 📝 CloudWatch logging for Lambda execution


## Quiz Topics

| # | Topic | Difficulty |
|--|--|--|
| 1 | CIDR notation | Beginner |
| 2 | Internet Gateway | Beginner |
| 3 | Public vs Private Subnets | Beginner |
| 4 | EC2 internet access requirements | Beginner |
| 5 | NAT Gateway | Beginner |
| 6 | Elastic Network Interfaces (ENI) | Beginner |
| 7 | Amazon Route 53 | Beginner |
| 8 | Security Groups vs NACLs | Intermediate |
| 9 | NACL rule processing order | Intermediate |
| 10 | VPC Peering limitations | Intermediate |
| 11 | AWS Transit Gateway | Intermediate |
| 12 | Direct Connect vs VPN | Intermediate |
| 13 | Application Load Balancer (Layer 7) | Intermediate |
| 14 | VPC Interface Endpoints & PrivateLink | Intermediate |
| 15 | AWS PrivateLink | Intermediate |


## Project Structure

```
aws-lex-quiz-chatbot/
│
├── lambda/
│   └── lambda_function.py        # Quiz logic: answer checking, score tracking, question flow
│
├── quiz-data/
│   └── quiz_questions.json       # 15 VPC networking questions with answers and explanations
│
└── README.md
```

## Deployment Steps

### Step 1 - S3 (Question Bank)
1. Create a private S3 bucket (e.g. `netquizquiz-bot-stacey`)
2. Upload `quiz_questions.json`
3. Note the S3 URI for use in the Lambda function

![S3 Bucket](https://github.com/user-attachments/assets/4b55cc03-4413-4371-9d9c-0d280eeec4bd)

### Step 2 - IAM Role
1. Create an IAM role named `NetQuizRole`
2. Attach: `AmazonS3ReadOnlyAccess` + `AWSLambdaBasicExecutionRole`

![IAM Role](https://github.com/user-attachments/assets/e30d6d72-a957-430b-89e3-0aa8a4a9a290)
![IAM Permissions](https://github.com/user-attachments/assets/ea1129f1-78c7-47cd-ba3d-f05bf6629583)


### Step 3 - Lambda Function
1. Create a Lambda function named `NetQuizHandler` (Python 3.12)
2. Assign the `NetQuizRole`
3. Paste the quiz handler code and update `BUCKET_NAME` to match your bucket
4. Click **Deploy**, then test with the `StartQuizTest` event

![Lambda Function](https://github.com/user-attachments/assets/53668a48-bf14-4752-a0af-22644bfd8d5f)
![Lambda Test](https://github.com/user-attachments/assets/258056ab-373b-47c9-ba21-a30a2104d9fd)


### Step 4 - Amazon Lex Bot
1. Create a bot named `VPCQuizBot`
2. Create intent **`StartQuiz`** with utterances: *start quiz, begin quiz, quiz me*, etc.
3. Create custom slot type **`QuizAnswerType`** with values: `A`, `B`, `C`, `D`
4. Create intent **`VPCQuiz`** with slot **`UserAnswer`** (type: `QuizAnswerType`)
5. Link Lambda under **Aliases → TestBotAlias → English → VPCQuizHandler**
6. **Build** the bot, then **Test** in the Lex console

![Lex Bot](https://github.com/user-attachments/assets/409e3016-2377-4fb8-b552-8f93354aea07)
![Lex Intents](https://github.com/user-attachments/assets/24e972b8-8c02-4f30-8f14-8d2d49a1a695)


## Sample Conversation

```
User: start quiz
Bot:  Welcome to the AWS VPC Quiz!

      Question 1 (Beginner): What does CIDR represent?
      A) DNS routing format
      B) IP address range notation
      C) Encryption method
      D) Load balancing strategy

      Type A, B, C, or D to answer.

User: B
Bot:  ✅ CORRECT! CIDR defines IP address ranges such as 10.0.0.0/16.

      Question 2 (Beginner): ...

...

Bot:  Quiz complete! You scored 13/15. Well done!
```

![Chat Screenshot](https://github.com/user-attachments/assets/d658e291-53e9-4c48-bfac-7244b71cfe1e)


## Troubleshooting

| Issue | Fix |
|--|--|
| Lambda: Access Denied on S3 | Confirm `NetQuizRole` has `AmazonS3ReadOnlyAccess` and bucket name in code is exact |
| Lex returns generic / no response | Click **Deploy** in Lambda, then **rebuild** the Lex bot. Confirm Lambda is linked under Aliases |
| Bot repeats the same question | Verify Lambda returns `sessionAttributes` (including `questionIndex`) in every response |
| Slot value is `None` in Lambda | Slot name `UserAnswer` must match exactly in both Lex and Lambda (case-sensitive) |
| JSON parse error in Lambda | Validate `quiz_questions.json` at [jsonlint.com](https://jsonlint.com) before re-uploading |
| Lex doesn't recognise an utterance | Add more variations to the intent and rebuild |


## Team

| Name | GitHub |
|--|--|
| Member 1 | [@SWE-StaceyL](https://github.com/SWE-StaceyL) |
| Member 2 | [Cassey] |
| Member 3 | [@username](https://github.com/username) |

*Praesignis AWS re/Start Programme - Built for CloudLearners Inc.*

## Licence

Built for educational purposes as part of a structured AWS training programme.
