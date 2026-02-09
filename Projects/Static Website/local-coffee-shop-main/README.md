## Coffee Shop Website

# Overview

This is a fully responsive website for a local coffee shop.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### Links

- Solution URL: [Code on Github](https://github.com/omoinjm/local-coffee-shop)
- Live Site URL: [Live Site](https://loffecoffee.vercel.app/)

# Diagram Previews

## FreshlyGround Cafe AWS Architecture (Mermaid Diagram)

This diagram visualizes the AWS cloud architecture for FreshlyGround Cafe, including compute, storage, database, security, networking, monitoring, and migration services, as derived from the project instructions and checklist.

```mermaid
graph TD
    subgraph On-Premises Environment
        OP_APP[On-Premises Applications]
        OP_DB[On-Premises Databases]
        OP_VM[On-Premises VMs]
    end

    subgraph Migration Services
        DMS[AWS DMS
Database Migration]
        SMS[AWS SMS
Server Migration]
    end

    subgraph AWS Cloud Infrastructure
        direction LR

        subgraph Compute Services
            EC2[Amazon EC2
Apps, Web Servers, DBs]
            LAMBDA[AWS Lambda
Serverless Functions]
        end

        subgraph Storage Services
            S3[Amazon S3
Static Website & Content]
            EBS[Amazon EBS
Block Storage]
        end

        subgraph Database Services
            RDS[Amazon RDS
Relational DBs]
            DYNAMODB[Amazon DynamoDB
NoSQL DB]
        end

        subgraph Security Services
            IAM[AWS IAM
Access Control]
            COGNITO[Amazon Cognito
User Authentication]
        end

        subgraph Networking & Monitoring
            CF[Amazon CloudFront
CDN]
            R53[Amazon Route 53
Domain Service]
            CW[Amazon CloudWatch
Monitoring]
        end

        Client[Users / Clients]
        API_GW[API Gateway]

        %% Data Flow
        Client --> R53
        R53 --> CF
        CF --> S3
        Client --> COGNITO
        COGNITO --> IAM
        IAM --> EC2
        IAM --> LAMBDA
        API_GW --> LAMBDA

        EC2 --> EBS
        EC2 --> RDS
        EC2 --> S3
        LAMBDA --> DYNAMODB
        LAMBDA --> S3

        %% Monitoring
        EC2 --> CW
        LAMBDA --> CW
        S3 --> CW
        RDS --> CW
        DYNAMODB --> CW
        CF --> CW
        R53 --> CW

        %% Migration Flows
        OP_DB -- Replicate Data --> DMS
        DMS -- Migrates Data To --> RDS
        DMS -- Migrates Data To --> DYNAMODB
        OP_VM -- Migrate VMs --> SMS
        SMS -- Migrates To --> EC2
    end
```

## Draw.io Diagram Example

To embed a Draw.io diagram (`.drawio` file) in a Markdown document, you typically need to export it to an image format (like SVG, PNG, or JPG) first. Then, you can embed that image using standard Markdown image syntax.

**Steps to Embed a Draw.io Diagram:**

1. Open your `aws-architecture.drawio` file in Draw.io.
2. Go to `File > Export as > SVG...` (or PNG/JPG).
3. Save the exported image (e.g., `aws-architecture.drawio.svg`) in your project directory (or an `images` subdirectory).
4. Reference the exported image in your Markdown file as shown below.

**Example (after exporting `aws-architecture.drawio` to `aws-architecture.drawio.svg`):**

![AWS Architecture Diagram](./assets/aws-architecture.drawio.svg)

_(Note: The image above will only display correctly after you have manually exported `aws-architecture.drawio` to `aws-architecture.drawio.svg` and placed it in the same directory as this Markdown file, or adjusted the path accordingly.)_

