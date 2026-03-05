# First NoSQL Database

The goal of this project was to implement Amazon DynamoDB to capture and store viewer behavior data for a streaming entertainment company, demonstrating how NoSQL databases deliver the high performance and horizontal scalability required for real-time data collection at massive scale.

## Theory & the "Why"

**NoSQL for High-Velocity Data & Flexible Schemas (Performance at Scale):**
This is the primary reason for choosing DynamoDB over traditional relational databases. Streaming platforms generate massive volumes of viewer behavior data (watch history, pause/resume events, content preferences, viewing duration) that need single-digit millisecond response times and the ability to scale to millions of concurrent users. NoSQL's key-value structure excels at these workloads. This enables use cases such as:

* Real-time viewer behavior tracking and event logging
* User session management with fast read/write operations
* Personalization data stores for recommendation engines
* Scalable metadata storage for content catalogs and user profiles

The streaming entertainment company did not want database performance bottlenecks limiting their ability to capture viewer insights or scale during peak hours, so DynamoDB works well here especially when data models evolve rapidly as new features are added. Due to DynamoDB's architecture, you get predictable performance: consistent single-digit millisecond latency regardless of scale, with automatic partitioning that handles traffic spikes seamlessly. DynamoDB also provides flexible schemas, allowing the company to add new behavioral tracking attributes without database migrations.

In essence, you implement DynamoDB when you need to capture high-velocity streaming data with consistent performance at any scale, ensuring the entertainment company can collect rich viewer behavior insights to drive personalization and improve streaming features without infrastructure constraints.

<img width="581" height="428" alt="Screenshot 2026-02-09 111127" src="https://github.com/user-attachments/assets/c2947d5f-2e65-40db-a5c2-2e8a304b5041" />
