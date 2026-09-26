const DATA = [
  {
    "id": "compute",
    "theme": "theme-compute",
    "icon": "ti-cpu",
    "label": "Compute",
    "desc": "Run applications on virtual machines, serverless functions, containers, or managed platforms.",
    "services": [
      {
        "name": "EC2",
        "tag": "Core",
        "short": "Virtual servers in the cloud",
        "specialty": "EC2 is Infrastructure as a Service. Use it when you need OS-level control over Linux or Windows servers, instance types, AMIs, security groups, and scaling.",
        "meta": [
          "IaaS",
          "Virtual machines",
          "Full control"
        ],
        "links": [
          "EBS",
          "VPC",
          "ELB",
          "IAM",
          "CloudWatch",
          "Auto Scaling"
        ]
      },
      {
        "name": "Lambda",
        "tag": "Core",
        "short": "Run code without managing servers",
        "specialty": "Lambda is serverless compute. It runs code in response to events and is best for automation, APIs, file processing, and event-driven workloads.",
        "meta": [
          "Serverless",
          "Event-driven",
          "Pay per request"
        ],
        "links": [
          "API Gateway",
          "S3",
          "DynamoDB",
          "SNS",
          "SQS",
          "EventBridge"
        ]
      },
      {
        "name": "ECS",
        "tag": "Common",
        "short": "Run Docker containers",
        "specialty": "ECS manages containerized apps. You define tasks and services, then run them on EC2 or Fargate.",
        "meta": [
          "Containers",
          "Docker",
          "Orchestration"
        ],
        "links": [
          "Fargate",
          "ECR",
          "ELB",
          "IAM",
          "CloudWatch",
          "VPC"
        ]
      },
      {
        "name": "EKS",
        "tag": "Common",
        "short": "Managed Kubernetes",
        "specialty": "EKS is AWS-managed Kubernetes. Use it when your team already uses Kubernetes and wants AWS to manage the control plane.",
        "meta": [
          "Kubernetes",
          "Containers",
          "Managed control plane"
        ],
        "links": [
          "Fargate",
          "ECR",
          "ELB",
          "IAM",
          "VPC"
        ]
      },
      {
        "name": "Fargate",
        "tag": "Common",
        "short": "Serverless container runtime",
        "specialty": "Fargate runs containers without managing EC2 instances. You define CPU and memory and AWS handles the servers.",
        "meta": [
          "Serverless",
          "Containers",
          "No EC2 management"
        ],
        "links": [
          "ECS",
          "EKS",
          "ECR",
          "IAM",
          "VPC"
        ]
      },
      {
        "name": "Elastic Beanstalk",
        "tag": "Common",
        "short": "Deploy applications quickly",
        "specialty": "Beanstalk is Platform as a Service. Upload code and AWS provisions EC2, ELB, Auto Scaling, and monitoring.",
        "meta": [
          "PaaS",
          "Application deployment",
          "Developer friendly"
        ],
        "links": [
          "EC2",
          "ELB",
          "RDS",
          "S3",
          "CloudWatch"
        ]
      },
      {
        "name": "Auto Scaling",
        "tag": "Core",
        "short": "Automatically match capacity to demand",
        "specialty": "Auto Scaling adds or removes resources automatically. It is a key elasticity service for performance and cost optimization.",
        "meta": [
          "Elasticity",
          "Horizontal scaling",
          "Cost optimization"
        ],
        "links": [
          "EC2",
          "ECS",
          "CloudWatch",
          "ELB",
          "SNS"
        ]
      }
    ]
  },
  {
    "id": "storage",
    "theme": "theme-storage",
    "icon": "ti-database",
    "label": "Storage",
    "desc": "Store objects, block volumes, shared files, archives, and hybrid data.",
    "services": [
      {
        "name": "S3",
        "tag": "Core",
        "short": "Object storage",
        "specialty": "S3 stores objects in buckets. Use it for files, backups, logs, websites, data lakes, and lifecycle policies to move data to cheaper classes.",
        "meta": [
          "Object storage",
          "Highly durable",
          "Public AWS service"
        ],
        "links": [
          "CloudFront",
          "Lambda",
          "Athena",
          "Glue",
          "IAM",
          "KMS"
        ]
      },
      {
        "name": "EBS",
        "tag": "Core",
        "short": "Block storage for EC2",
        "specialty": "EBS volumes attach to EC2 like virtual hard drives. It is Availability Zone scoped and can be snapshotted to S3.",
        "meta": [
          "Block storage",
          "Persistent",
          "AZ-scoped"
        ],
        "links": [
          "EC2",
          "S3 snapshots",
          "KMS",
          "CloudWatch"
        ]
      },
      {
        "name": "EFS",
        "tag": "Common",
        "short": "Shared Linux file system",
        "specialty": "EFS is a managed file system that multiple EC2 instances can access at the same time across AZs.",
        "meta": [
          "File storage",
          "NFS",
          "Regional resilience"
        ],
        "links": [
          "EC2",
          "ECS",
          "Lambda",
          "KMS",
          "VPC"
        ]
      },
      {
        "name": "S3 Glacier",
        "tag": "Common",
        "short": "Low-cost archive storage",
        "specialty": "S3 Glacier storage classes are for long-term archival. Choose them when low cost matters more than instant retrieval.",
        "meta": [
          "Archive",
          "Low cost",
          "Retrieval time varies"
        ],
        "links": [
          "S3 lifecycle",
          "IAM",
          "KMS"
        ]
      },
      {
        "name": "Storage Gateway",
        "tag": "Specialty",
        "short": "Hybrid storage bridge",
        "specialty": "Storage Gateway connects on-premises environments to AWS storage using file, volume, or tape gateway options.",
        "meta": [
          "Hybrid",
          "Migration",
          "On-premises bridge"
        ],
        "links": [
          "S3",
          "EBS",
          "S3 Glacier",
          "IAM"
        ]
      }
    ]
  },
  {
    "id": "database",
    "theme": "theme-database",
    "icon": "ti-server",
    "label": "Databases",
    "desc": "Managed SQL, NoSQL, cache, graph, and analytics database services.",
    "services": [
      {
        "name": "RDS",
        "tag": "Core",
        "short": "Managed relational databases",
        "specialty": "RDS manages relational engines such as MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. AWS handles backups, patching options, and Multi-AZ features.",
        "meta": [
          "SQL",
          "Managed",
          "Relational"
        ],
        "links": [
          "EC2",
          "VPC",
          "IAM",
          "KMS",
          "CloudWatch",
          "Secrets Manager"
        ]
      },
      {
        "name": "Aurora",
        "tag": "Core",
        "short": "AWS-optimized relational database",
        "specialty": "Aurora is compatible with MySQL and PostgreSQL and is designed for high performance, availability, and cloud-native scaling.",
        "meta": [
          "MySQL/PostgreSQL",
          "High performance",
          "Managed"
        ],
        "links": [
          "RDS",
          "Lambda",
          "IAM",
          "KMS",
          "VPC"
        ]
      },
      {
        "name": "DynamoDB",
        "tag": "Core",
        "short": "Serverless NoSQL database",
        "specialty": "DynamoDB is a fully managed key-value and document database with fast, scalable performance. NoSQL is a strong exam keyword for DynamoDB.",
        "meta": [
          "NoSQL",
          "Serverless",
          "Low latency"
        ],
        "links": [
          "Lambda",
          "API Gateway",
          "DAX",
          "IAM",
          "KMS"
        ]
      },
      {
        "name": "ElastiCache",
        "tag": "Common",
        "short": "In-memory cache",
        "specialty": "ElastiCache provides Redis or Memcached to reduce database load and improve application speed.",
        "meta": [
          "Cache",
          "Redis",
          "Memcached"
        ],
        "links": [
          "RDS",
          "Aurora",
          "DynamoDB",
          "EC2",
          "VPC"
        ]
      },
      {
        "name": "Redshift",
        "tag": "Common",
        "short": "Data warehouse",
        "specialty": "Redshift is used for analytics and business intelligence on large structured datasets.",
        "meta": [
          "Analytics",
          "Data warehouse",
          "SQL"
        ],
        "links": [
          "S3",
          "Glue",
          "QuickSight",
          "IAM",
          "KMS"
        ]
      },
      {
        "name": "Neptune",
        "tag": "Specialty",
        "short": "Graph database",
        "specialty": "Neptune stores highly connected data such as fraud graphs, social networks, and recommendation relationships.",
        "meta": [
          "Graph DB",
          "Relationships",
          "Specialized"
        ],
        "links": [
          "VPC",
          "IAM",
          "KMS",
          "CloudWatch"
        ]
      }
    ]
  },
  {
    "id": "network",
    "theme": "theme-network",
    "icon": "ti-network",
    "label": "Networking & CDN",
    "desc": "Connect, route, protect, and accelerate AWS workloads.",
    "services": [
      {
        "name": "VPC",
        "tag": "Core",
        "short": "Isolated private network",
        "specialty": "VPC lets you define subnets, route tables, internet gateways, NAT gateways, security groups, and network ACLs.",
        "meta": [
          "Networking",
          "Subnets",
          "Routing"
        ],
        "links": [
          "EC2",
          "RDS",
          "Lambda",
          "ECS",
          "Direct Connect",
          "VPN"
        ]
      },
      {
        "name": "CloudFront",
        "tag": "Core",
        "short": "Global content delivery network",
        "specialty": "CloudFront caches content at edge locations to reduce latency. It is best for websites, media, APIs, and content acceleration.",
        "meta": [
          "CDN",
          "Edge caching",
          "Global service"
        ],
        "links": [
          "S3",
          "ELB",
          "API Gateway",
          "WAF",
          "Shield",
          "Route 53"
        ]
      },
      {
        "name": "Route 53",
        "tag": "Core",
        "short": "DNS and traffic routing",
        "specialty": "Route 53 maps domain names to resources and supports routing policies and health checks.",
        "meta": [
          "DNS",
          "Routing",
          "Health checks"
        ],
        "links": [
          "CloudFront",
          "ELB",
          "S3",
          "EC2",
          "API Gateway"
        ]
      },
      {
        "name": "ELB",
        "tag": "Core",
        "short": "Distribute traffic",
        "specialty": "Elastic Load Balancing spreads traffic across EC2, containers, Lambda, or IP targets for high availability.",
        "meta": [
          "Load balancing",
          "HA",
          "Traffic distribution"
        ],
        "links": [
          "EC2",
          "ECS",
          "Lambda",
          "Auto Scaling",
          "WAF"
        ]
      },
      {
        "name": "Direct Connect",
        "tag": "Common",
        "short": "Dedicated private connection",
        "specialty": "Direct Connect provides a private, dedicated network connection from on-premises to AWS.",
        "meta": [
          "Hybrid",
          "Private line",
          "Consistent bandwidth"
        ],
        "links": [
          "VPC",
          "Transit Gateway",
          "VPN"
        ]
      },
      {
        "name": "VPN",
        "tag": "Common",
        "short": "Encrypted tunnel",
        "specialty": "AWS VPN connects on-premises networks or remote users to AWS over encrypted internet tunnels.",
        "meta": [
          "Encrypted",
          "Hybrid",
          "Remote access"
        ],
        "links": [
          "VPC",
          "Direct Connect",
          "Transit Gateway"
        ]
      },
      {
        "name": "API Gateway",
        "tag": "Core",
        "short": "Create and manage APIs",
        "specialty": "API Gateway secures, throttles, and manages REST, HTTP, and WebSocket APIs, commonly in front of Lambda.",
        "meta": [
          "APIs",
          "Throttling",
          "Serverless apps"
        ],
        "links": [
          "Lambda",
          "Cognito",
          "IAM",
          "CloudWatch",
          "WAF"
        ]
      }
    ]
  },
  {
    "id": "security",
    "theme": "theme-security",
    "icon": "ti-shield-lock",
    "label": "Security & Identity",
    "desc": "Control access, protect data, audit activity, and detect threats.",
    "services": [
      {
        "name": "IAM",
        "tag": "Core",
        "short": "Users, roles, groups, and policies",
        "specialty": "IAM controls authentication and authorization. Apply least privilege and use roles for temporary credentials and service permissions.",
        "meta": [
          "Identity",
          "Access control",
          "Least privilege"
        ],
        "links": [
          "Every AWS service",
          "STS",
          "Organizations",
          "CloudTrail"
        ]
      },
      {
        "name": "KMS",
        "tag": "Core",
        "short": "Encryption key management",
        "specialty": "KMS creates and manages encryption keys used by services such as S3, EBS, RDS, and DynamoDB.",
        "meta": [
          "Encryption",
          "Keys",
          "Data protection"
        ],
        "links": [
          "S3",
          "EBS",
          "RDS",
          "DynamoDB",
          "Secrets Manager"
        ]
      },
      {
        "name": "Cognito",
        "tag": "Common",
        "short": "App user authentication",
        "specialty": "Cognito adds sign-up, sign-in, MFA, and temporary AWS credentials for web and mobile apps.",
        "meta": [
          "Authentication",
          "User pools",
          "Identity pools"
        ],
        "links": [
          "API Gateway",
          "ALB",
          "Lambda",
          "IAM"
        ]
      },
      {
        "name": "Secrets Manager",
        "tag": "Common",
        "short": "Store and rotate secrets",
        "specialty": "Secrets Manager stores credentials and API keys and can rotate supported database secrets automatically.",
        "meta": [
          "Secrets",
          "Rotation",
          "Credentials"
        ],
        "links": [
          "RDS",
          "Lambda",
          "KMS",
          "IAM"
        ]
      },
      {
        "name": "WAF",
        "tag": "Common",
        "short": "Web application firewall",
        "specialty": "WAF filters HTTP/HTTPS requests using rules for IPs, headers, rate limits, SQL injection, and cross-site scripting.",
        "meta": [
          "Layer 7 firewall",
          "Web security",
          "Rules"
        ],
        "links": [
          "CloudFront",
          "ELB",
          "API Gateway",
          "Shield"
        ]
      },
      {
        "name": "Shield",
        "tag": "Common",
        "short": "DDoS protection",
        "specialty": "Shield protects applications from distributed denial-of-service attacks. Shield Standard is included, Shield Advanced adds extra protection.",
        "meta": [
          "DDoS",
          "Protection",
          "Edge security"
        ],
        "links": [
          "CloudFront",
          "Route 53",
          "ELB",
          "WAF"
        ]
      },
      {
        "name": "GuardDuty",
        "tag": "Common",
        "short": "Threat detection",
        "specialty": "GuardDuty analyzes logs and threat intelligence to detect suspicious behavior without agents.",
        "meta": [
          "Threat detection",
          "Security monitoring",
          "No agents"
        ],
        "links": [
          "CloudTrail",
          "VPC Flow Logs",
          "Security Hub",
          "SNS"
        ]
      },
      {
        "name": "CloudTrail",
        "tag": "Core",
        "short": "Audit AWS API activity",
        "specialty": "CloudTrail records AWS account activity, including who did what, when, and from where.",
        "meta": [
          "Audit logs",
          "Compliance",
          "Account activity"
        ],
        "links": [
          "S3",
          "CloudWatch",
          "Athena",
          "IAM",
          "KMS"
        ]
      },
      {
        "name": "Artifact",
        "tag": "Common",
        "short": "Compliance reports",
        "specialty": "AWS Artifact gives on-demand access to AWS security and compliance reports and agreements.",
        "meta": [
          "Compliance",
          "Reports",
          "Audit evidence"
        ],
        "links": [
          "IAM",
          "Organizations",
          "Compliance programs"
        ]
      }
    ]
  },
  {
    "id": "analytics",
    "theme": "theme-analytics",
    "icon": "ti-chart-bar",
    "label": "Analytics & Big Data",
    "desc": "Query, transform, stream, and visualize data at scale.",
    "services": [
      {
        "name": "Athena",
        "tag": "Common",
        "short": "Query S3 with SQL",
        "specialty": "Athena is serverless SQL for data stored in S3. You pay for the data scanned.",
        "meta": [
          "Serverless SQL",
          "S3 query",
          "Analytics"
        ],
        "links": [
          "S3",
          "Glue",
          "QuickSight",
          "IAM"
        ]
      },
      {
        "name": "Glue",
        "tag": "Common",
        "short": "ETL and data catalog",
        "specialty": "Glue discovers, catalogs, prepares, and transforms data for analytics.",
        "meta": [
          "ETL",
          "Data catalog",
          "Data preparation"
        ],
        "links": [
          "S3",
          "Athena",
          "Redshift",
          "EMR"
        ]
      },
      {
        "name": "Kinesis",
        "tag": "Common",
        "short": "Real-time streaming data",
        "specialty": "Kinesis collects and processes streaming data in real time for logs, events, clickstreams, and telemetry.",
        "meta": [
          "Streaming",
          "Real time",
          "Data ingestion"
        ],
        "links": [
          "S3",
          "Redshift",
          "Lambda",
          "Glue"
        ]
      },
      {
        "name": "QuickSight",
        "tag": "Common",
        "short": "BI dashboards",
        "specialty": "QuickSight creates interactive dashboards and reports for business intelligence.",
        "meta": [
          "BI",
          "Dashboards",
          "Visualization"
        ],
        "links": [
          "Athena",
          "Redshift",
          "RDS",
          "S3"
        ]
      }
    ]
  },
  {
    "id": "ml",
    "theme": "theme-ml",
    "icon": "ti-brain",
    "label": "AI & Machine Learning",
    "desc": "Use prebuilt AI APIs or build, train, and deploy models.",
    "services": [
      {
        "name": "SageMaker",
        "tag": "Common",
        "short": "Build, train, deploy ML",
        "specialty": "SageMaker is an end-to-end platform for machine learning models, notebooks, training, tuning, and deployment.",
        "meta": [
          "Machine learning",
          "Training",
          "Deployment"
        ],
        "links": [
          "S3",
          "ECR",
          "IAM",
          "VPC",
          "CloudWatch"
        ]
      },
      {
        "name": "Rekognition",
        "tag": "Common",
        "short": "Image and video analysis",
        "specialty": "Rekognition detects objects, faces, text, and unsafe content in images and videos.",
        "meta": [
          "Computer vision",
          "Images",
          "Video"
        ],
        "links": [
          "S3",
          "Lambda",
          "SNS",
          "IAM"
        ]
      },
      {
        "name": "Comprehend",
        "tag": "Specialty",
        "short": "Natural language processing",
        "specialty": "Comprehend analyzes text for sentiment, entities, key phrases, language, and PII.",
        "meta": [
          "NLP",
          "Text analysis",
          "Sentiment"
        ],
        "links": [
          "S3",
          "Lambda",
          "Kinesis",
          "Glue"
        ]
      },
      {
        "name": "Bedrock",
        "tag": "Common",
        "short": "Foundation model APIs",
        "specialty": "Bedrock provides managed access to foundation models for generative AI applications.",
        "meta": [
          "Generative AI",
          "Foundation models",
          "Managed"
        ],
        "links": [
          "S3",
          "Lambda",
          "OpenSearch",
          "IAM",
          "KMS"
        ]
      }
    ]
  },
  {
    "id": "devtools",
    "theme": "theme-devtools",
    "icon": "ti-code",
    "label": "Developer Tools & CI/CD",
    "desc": "Build, test, deploy, and manage code and infrastructure.",
    "services": [
      {
        "name": "CodeBuild",
        "tag": "Common",
        "short": "Managed build service",
        "specialty": "CodeBuild compiles code, runs tests, and produces artifacts without build servers.",
        "meta": [
          "CI",
          "Build",
          "Testing"
        ],
        "links": [
          "CodePipeline",
          "S3",
          "ECR",
          "IAM"
        ]
      },
      {
        "name": "CodeDeploy",
        "tag": "Common",
        "short": "Automated deployments",
        "specialty": "CodeDeploy automates deployments to EC2, Lambda, ECS, and on-premises servers.",
        "meta": [
          "Deployment",
          "Blue/green",
          "Rollback"
        ],
        "links": [
          "EC2",
          "Lambda",
          "ECS",
          "CodePipeline"
        ]
      },
      {
        "name": "CodePipeline",
        "tag": "Common",
        "short": "CI/CD orchestration",
        "specialty": "CodePipeline automates source, build, test, approval, and deployment stages.",
        "meta": [
          "CI/CD",
          "Automation",
          "Pipeline"
        ],
        "links": [
          "CodeBuild",
          "CodeDeploy",
          "S3",
          "SNS"
        ]
      },
      {
        "name": "CloudFormation",
        "tag": "Core",
        "short": "Infrastructure as Code",
        "specialty": "CloudFormation provisions and manages AWS resources using JSON or YAML templates.",
        "meta": [
          "IaC",
          "Templates",
          "Stacks"
        ],
        "links": [
          "Every AWS service",
          "CDK",
          "CodePipeline"
        ]
      },
      {
        "name": "X-Ray",
        "tag": "Common",
        "short": "Distributed tracing",
        "specialty": "X-Ray traces requests across services to troubleshoot latency and errors.",
        "meta": [
          "Tracing",
          "Debugging",
          "Microservices"
        ],
        "links": [
          "Lambda",
          "API Gateway",
          "ECS",
          "EC2"
        ]
      }
    ]
  },
  {
    "id": "mgmt",
    "theme": "theme-mgmt",
    "icon": "ti-settings",
    "label": "Management, Cost & Governance",
    "desc": "Monitor, govern, optimize, and control AWS environments.",
    "services": [
      {
        "name": "CloudWatch",
        "tag": "Core",
        "short": "Metrics, logs, alarms",
        "specialty": "CloudWatch collects operational metrics, logs, dashboards, and alarms from AWS resources.",
        "meta": [
          "Monitoring",
          "Logs",
          "Alarms"
        ],
        "links": [
          "SNS",
          "Auto Scaling",
          "Lambda",
          "EC2",
          "RDS"
        ]
      },
      {
        "name": "AWS Config",
        "tag": "Common",
        "short": "Resource configuration tracking",
        "specialty": "Config records resource configuration changes and evaluates compliance against rules.",
        "meta": [
          "Compliance",
          "Configuration",
          "History"
        ],
        "links": [
          "CloudTrail",
          "SNS",
          "Lambda",
          "Security Hub"
        ]
      },
      {
        "name": "Organizations",
        "tag": "Core",
        "short": "Manage multiple accounts",
        "specialty": "Organizations manages multiple AWS accounts using organizational units, consolidated billing, and service control policies.",
        "meta": [
          "Multi-account",
          "SCPs",
          "Billing"
        ],
        "links": [
          "IAM",
          "Control Tower",
          "CloudTrail",
          "Config"
        ]
      },
      {
        "name": "Trusted Advisor",
        "tag": "Core",
        "short": "Best-practice recommendations",
        "specialty": "Trusted Advisor checks cost optimization, security, performance, fault tolerance, and service limits.",
        "meta": [
          "Best practices",
          "Cost",
          "Security"
        ],
        "links": [
          "IAM",
          "CloudWatch",
          "Support"
        ]
      },
      {
        "name": "Cost Explorer",
        "tag": "Core",
        "short": "Analyze AWS spending",
        "specialty": "Cost Explorer helps visualize, analyze, and forecast AWS costs and usage.",
        "meta": [
          "Cost analysis",
          "Forecasting",
          "Budgets"
        ],
        "links": [
          "Organizations",
          "Budgets",
          "IAM"
        ]
      },
      {
        "name": "Budgets",
        "tag": "Common",
        "short": "Cost and usage alerts",
        "specialty": "AWS Budgets sends alerts when actual or forecasted cost/usage crosses thresholds.",
        "meta": [
          "Cost alerts",
          "Forecasts",
          "Budget actions"
        ],
        "links": [
          "SNS",
          "Organizations",
          "Cost Explorer"
        ]
      },
      {
        "name": "Systems Manager",
        "tag": "Common",
        "short": "Operate infrastructure at scale",
        "specialty": "Systems Manager manages EC2 and on-premises servers with Session Manager, Patch Manager, Run Command, and Parameter Store.",
        "meta": [
          "Operations",
          "Patching",
          "Session manager"
        ],
        "links": [
          "EC2",
          "IAM",
          "KMS",
          "CloudWatch"
        ]
      }
    ]
  },
  {
    "id": "app",
    "theme": "theme-app",
    "icon": "ti-puzzle",
    "label": "App Integration & Messaging",
    "desc": "Decouple apps with queues, notifications, events, workflows, and email.",
    "services": [
      {
        "name": "SQS",
        "tag": "Core",
        "short": "Managed message queue",
        "specialty": "SQS stores messages between services so producers and consumers can scale independently.",
        "meta": [
          "Queue",
          "Decoupling",
          "Standard/FIFO"
        ],
        "links": [
          "Lambda",
          "EC2",
          "ECS",
          "SNS",
          "EventBridge"
        ]
      },
      {
        "name": "SNS",
        "tag": "Core",
        "short": "Pub/sub notifications",
        "specialty": "SNS pushes messages from publishers to subscribers such as SQS, Lambda, email, SMS, and HTTP endpoints.",
        "meta": [
          "Pub/Sub",
          "Fan-out",
          "Notifications"
        ],
        "links": [
          "SQS",
          "Lambda",
          "CloudWatch",
          "EventBridge",
          "SES"
        ]
      },
      {
        "name": "EventBridge",
        "tag": "Core",
        "short": "Serverless event bus",
        "specialty": "EventBridge routes events from AWS services, custom apps, and SaaS apps to targets.",
        "meta": [
          "Events",
          "Serverless",
          "Routing"
        ],
        "links": [
          "Lambda",
          "SQS",
          "SNS",
          "Step Functions"
        ]
      },
      {
        "name": "Step Functions",
        "tag": "Common",
        "short": "Workflow orchestration",
        "specialty": "Step Functions coordinates AWS services into visual state machines with retries and error handling.",
        "meta": [
          "Workflow",
          "State machine",
          "Orchestration"
        ],
        "links": [
          "Lambda",
          "DynamoDB",
          "ECS",
          "SNS",
          "SQS"
        ]
      },
      {
        "name": "SES",
        "tag": "Common",
        "short": "Email sending service",
        "specialty": "SES sends transactional and marketing emails at scale.",
        "meta": [
          "Email",
          "Marketing",
          "Transactional"
        ],
        "links": [
          "S3",
          "Lambda",
          "SNS",
          "IAM"
        ]
      }
    ]
  }
];
const DOMAINS = [
  {
    "title": "Domain 1 \u2014 Cloud Concepts",
    "icon": "ti-cloud",
    "summary": "Understand AWS value, cloud computing criteria, design principles, migration strategies, and cloud economics.",
    "sections": [
      [
        "Cloud computing criteria",
        [
          "On-demand self-service: provision resources without human intervention.",
          "Broad network access: use console, CLI, APIs, HTTPS, VPN, SSH, and SDKs.",
          "Resource pooling: AWS shares large resource pools across customers while isolating accounts.",
          "Rapid elasticity: scale out and scale in as demand changes.",
          "Measured service: usage is monitored, metered, and billed."
        ]
      ],
      [
        "High availability, fault tolerance, and disaster recovery",
        [
          "High availability reduces downtime and restores service quickly after failure.",
          "Fault tolerance keeps the system operating through component failure.",
          "Disaster recovery is the planned process for restoring systems after a disaster."
        ]
      ],
      [
        "Scaling and elasticity",
        [
          "Vertical scaling means resizing to a larger resource, such as a bigger EC2 instance.",
          "Horizontal scaling means adding more resources, such as more EC2 instances behind a load balancer.",
          "Elasticity combines automation with horizontal scaling to match capacity to demand."
        ]
      ],
      [
        "Well-Architected Framework",
        [
          "Six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
          "Key design principles: stop guessing capacity, automate, test at production scale, use data, and improve through game days."
        ]
      ],
      [
        "Migration and economics",
        [
          "Know the 7 migration strategies: retire, retain, rehost, relocate, repurchase, replatform, and refactor/re-architect.",
          "Moving to AWS often trades capital expense for variable expense.",
          "Cost optimization includes right sizing, managed services, automation, and paying only for what you use."
        ]
      ]
    ],
    "keywords": [
      "On-demand",
      "Elasticity",
      "High availability",
      "Fault tolerance",
      "7 Rs",
      "OpEx vs CapEx"
    ]
  },
  {
    "title": "Domain 2 \u2014 Security and Compliance",
    "icon": "ti-shield-lock",
    "summary": "Understand shared responsibility, security governance, IAM, logging, encryption, and security services.",
    "sections": [
      [
        "Shared responsibility model",
        [
          "AWS is responsible for security of the cloud: global infrastructure, Regions, AZs, hardware, and managed service infrastructure.",
          "Customers are responsible for security in the cloud: data, identity access, application security, OS patching for EC2, and network/firewall configuration.",
          "Responsibility changes by service. AWS patches RDS database infrastructure; customers patch databases installed directly on EC2."
        ]
      ],
      [
        "Governance and compliance",
        [
          "AWS Artifact provides compliance reports and agreements.",
          "Compliance requirements can vary by service and workload.",
          "CloudTrail audits API activity; CloudWatch monitors operational metrics and logs; Config tracks resource configuration and compliance."
        ]
      ],
      [
        "Access management",
        [
          "Protect the root user with MFA and avoid using it for daily work.",
          "Use IAM users, groups, roles, and policies to control access.",
          "Apply least privilege and use IAM roles for temporary access and service permissions.",
          "Cognito Identity Pools can provide temporary AWS credentials to app users."
        ]
      ],
      [
        "Network and application security",
        [
          "Security groups protect resources and are stateful.",
          "Network ACLs protect subnets and are stateless.",
          "WAF filters web traffic based on rules; Shield protects against DDoS; GuardDuty detects threats; Inspector scans vulnerabilities."
        ]
      ]
    ],
    "keywords": [
      "Shared responsibility",
      "IAM",
      "MFA",
      "Least privilege",
      "CloudTrail",
      "CloudWatch",
      "Config",
      "WAF",
      "Shield"
    ]
  },
  {
    "title": "Domain 3 \u2014 Cloud Technology and Services",
    "icon": "ti-server-2",
    "summary": "Know deployment methods, global infrastructure, compute, storage, database, networking, analytics, AI/ML, and other service categories.",
    "sections": [
      [
        "Deployment and operations",
        [
          "AWS can be accessed using the Management Console, CLI, SDKs, APIs, and Infrastructure as Code tools like CloudFormation.",
          "Public cloud is available over public cloud platforms; private cloud uses dedicated cloud resources; hybrid combines AWS with on-premises or private cloud; multi-cloud uses more than one public cloud.",
          "Direct Connect is a dedicated private connection; VPN is encrypted over the internet; public internet access uses internet gateways for public subnets."
        ]
      ],
      [
        "Global infrastructure",
        [
          "Regions are geographic areas containing multiple Availability Zones.",
          "Availability Zones are isolated data center groups connected by high-speed links.",
          "Edge locations cache or proxy content close to users for services such as CloudFront and Global Accelerator.",
          "IAM, CloudFront, and Route 53 are examples of globally resilient services; EBS is Availability Zone scoped."
        ]
      ],
      [
        "Service categories",
        [
          "Compute includes EC2, Lambda, ECS, EKS, Fargate, Elastic Beanstalk, and Auto Scaling.",
          "Storage includes S3, EBS, EFS, S3 Glacier, FSx, and Storage Gateway.",
          "Databases include RDS, Aurora, DynamoDB, ElastiCache, Redshift, Neptune, and DocumentDB.",
          "Networking includes VPC, Route 53, CloudFront, ELB, Direct Connect, VPN, Transit Gateway, and API Gateway.",
          "Analytics and AI/ML include Athena, Glue, Kinesis, QuickSight, SageMaker, Rekognition, Comprehend, and Bedrock."
        ]
      ]
    ],
    "keywords": [
      "Regions",
      "AZs",
      "Edge locations",
      "Console",
      "CLI",
      "SDK",
      "IaC",
      "Direct Connect",
      "VPN"
    ]
  },
  {
    "title": "Domain 4 \u2014 Billing, Pricing, and Support",
    "icon": "ti-receipt-dollar",
    "summary": "Understand AWS pricing models, cost tools, account support, purchasing options, and support resources.",
    "sections": [
      [
        "Pricing fundamentals",
        [
          "AWS pricing follows pay-as-you-go, pay less when you reserve, and pay less with volume-based discounts.",
          "On-Demand is flexible; Reserved Instances and Savings Plans reduce cost for steady usage; Spot can save money for interruptible workloads.",
          "Data transfer, storage class, requests, compute hours, and licensing can affect cost."
        ]
      ],
      [
        "Cost tools",
        [
          "Cost Explorer visualizes and forecasts spending.",
          "AWS Budgets alerts you when cost or usage reaches thresholds.",
          "Trusted Advisor identifies cost optimization, security, performance, fault tolerance, and service limit recommendations.",
          "The Pricing Calculator estimates cost before deployment."
        ]
      ],
      [
        "Support and resources",
        [
          "AWS documentation is best for service instructions and best practices.",
          "The Well-Architected Framework is best for architecture best practices.",
          "AWS re:Post provides community support.",
          "AWS Skill Builder and Training & Certification help with learning paths and labs.",
          "AWS Support plans, TAMs, AWS Partner Network, and Professional Services provide different levels of assistance."
        ]
      ]
    ],
    "keywords": [
      "On-Demand",
      "Reserved",
      "Savings Plans",
      "Spot",
      "Cost Explorer",
      "Budgets",
      "Trusted Advisor",
      "Support plans"
    ]
  }
];
const QUESTIONS = [
  {
    "question": "Which AWS service provides virtual servers?",
    "answers": [
      "S3",
      "EC2",
      "IAM",
      "CloudFront"
    ],
    "correct": "EC2"
  },
  {
    "question": "Which AWS service is used for object storage?",
    "answers": [
      "RDS",
      "Lambda",
      "S3",
      "VPC"
    ],
    "correct": "S3"
  },
  {
    "question": "Which service manages users, roles, and permissions?",
    "answers": [
      "IAM",
      "EBS",
      "CloudWatch",
      "Redshift"
    ],
    "correct": "IAM"
  },
  {
    "question": "Which service records AWS API activity?",
    "answers": [
      "CloudTrail",
      "CloudFront",
      "Route 53",
      "S3 Glacier"
    ],
    "correct": "CloudTrail"
  },
  {
    "question": "Which AWS service provides compliance reports and agreements?",
    "answers": [
      "Artifact",
      "Athena",
      "Auto Scaling",
      "EFS"
    ],
    "correct": "Artifact"
  },
  {
    "question": "Which design means adding more instances instead of resizing one instance?",
    "answers": [
      "Vertical scaling",
      "Horizontal scaling",
      "Manual patching",
      "Archiving"
    ],
    "correct": "Horizontal scaling"
  },
  {
    "question": "Which connection option is a dedicated private line to AWS?",
    "answers": [
      "Internet Gateway",
      "Direct Connect",
      "NAT Gateway",
      "S3 Transfer Acceleration"
    ],
    "correct": "Direct Connect"
  },
  {
    "question": "Which service is best for serverless NoSQL?",
    "answers": [
      "Aurora",
      "DynamoDB",
      "Redshift",
      "EBS"
    ],
    "correct": "DynamoDB"
  }
];

let openCategories = new Set(['compute']);
let openDomains = new Set([0]);
let currentFilter = 'all';
let searchText = '';
let viewedServices = new Set(JSON.parse(localStorage.getItem('viewedServices') || '[]'));
let currentQuizIndex = 0, quizScore = 0, quizStarted = false, answeredCurrent = false;

const catsGrid = document.getElementById('catsGrid');
const domainGrid = document.getElementById('domainGrid');
const totalServicesEl = document.getElementById('totalServices');
const viewedServicesEl = document.getElementById('viewedServices');
const progressPercentEl = document.getElementById('progressPercent');
const progressFillEl = document.getElementById('progressFill');

function totalServices(){return DATA.reduce((sum,cat)=>sum+cat.services.length,0)}
function serviceMatches(cat,svc){const h=[cat.label,cat.desc,svc.name,svc.tag,svc.short,svc.specialty,svc.meta.join(' '),svc.links.join(' ')].join(' ').toLowerCase();return h.includes(searchText.toLowerCase())}

function renderFilters(){const bar=document.getElementById('filterBar');bar.innerHTML='<span class="filter-label">Filter:</span>'; [{id:'all',label:'All'},...DATA.map(c=>({id:c.id,label:c.label}))].forEach(f=>{const b=document.createElement('button');b.className='filter-btn '+(currentFilter===f.id?'active':'');b.textContent=f.label;b.onclick=()=>{currentFilter=f.id;renderFilters();renderAll()};bar.appendChild(b)})}

function renderAll(){catsGrid.innerHTML='';DATA.forEach(cat=>{const visibleFilter=currentFilter==='all'||currentFilter===cat.id;const matching=cat.services.filter(s=>serviceMatches(cat,s));const visibleSearch=searchText.trim()===''||matching.length>0;const card=document.createElement('article');card.className=`category-card ${cat.theme} ${openCategories.has(cat.id)?'open':''} ${(!visibleFilter||!visibleSearch)?'hidden':''}`;card.innerHTML=`<div class="category-header"><div class="cat-icon"><i class="ti ${cat.icon}"></i></div><div class="cat-title"><h2>${cat.label}</h2><p>${cat.desc}</p></div><span class="cat-count">${cat.services.length} services</span><i class="ti ti-chevron-down cat-chevron"></i></div>`;card.querySelector('.category-header').onclick=()=>{openCategories.has(cat.id)?openCategories.delete(cat.id):openCategories.add(cat.id);renderAll()};const grid=document.createElement('div');grid.className='services-grid';cat.services.forEach((svc,i)=>{if(searchText.trim() && !serviceMatches(cat,svc)) return;const sid=`${cat.id}-${i}`;const item=document.createElement('div');item.className='service-item '+(viewedServices.has(sid)?'viewed':'');item.id='svc-'+sid;item.innerHTML=`<div class="service-name">${svc.name}<span class="service-tag">${svc.tag}</span></div><div class="service-desc">${svc.short}</div>`;item.onclick=(e)=>{e.stopPropagation();toggleService(sid,item)};grid.appendChild(item);const dp=document.createElement('div');dp.className='detail-panel';dp.id='dp-'+sid;dp.innerHTML=`<div class="detail-title">${svc.name} — Specialty</div><div class="detail-specialty">${svc.specialty}</div><div class="detail-meta">${svc.meta.map(m=>`<span class="detail-badge">${m}</span>`).join('')}</div><div class="links-title">Connects to</div><div class="links-list">${svc.links.map(l=>`<span class="link-chip">${l}</span>`).join('')}</div><button class="ask-btn" onclick="alert('Practice: Explain when to use ${svc.name}, what group it belongs to, and name one service it connects to.')">Practice exam question</button>`;grid.appendChild(dp)});card.appendChild(grid);catsGrid.appendChild(card)});updateProgress()}
function toggleService(sid,item){const dp=document.getElementById('dp-'+sid);const isOpen=dp.classList.contains('show');document.querySelectorAll('.detail-panel').forEach(p=>p.classList.remove('show'));document.querySelectorAll('.service-item').forEach(i=>i.classList.remove('active-service'));if(!isOpen){dp.classList.add('show');item.classList.add('active-service');viewedServices.add(sid);localStorage.setItem('viewedServices',JSON.stringify([...viewedServices]));item.classList.add('viewed');updateProgress()}}
function updateProgress(){const total=totalServices();const viewed=viewedServices.size;const pct=Math.round(viewed/total*100);totalServicesEl.textContent=total;viewedServicesEl.textContent=viewed;progressPercentEl.textContent=pct+'%';progressFillEl.style.width=pct+'%'}
function renderDomains(){domainGrid.innerHTML='';DOMAINS.forEach((d,idx)=>{const card=document.createElement('article');card.className='domain-card '+(openDomains.has(idx)?'open':'');card.innerHTML=`<div class="domain-header"><div class="cat-icon" style="--cat-bg:#E6F1FB;--cat-color:#185FA5"><i class="ti ${d.icon}"></i></div><div class="cat-title"><h2>${d.title}</h2><p>${d.summary}</p></div><i class="ti ti-chevron-down cat-chevron"></i></div><div class="domain-content">${d.sections.map(sec=>`<h3>${sec[0]}</h3><ul>${sec[1].map(x=>`<li>${x}</li>`).join('')}</ul>`).join('')}<div class="keyword-row">${d.keywords.map(k=>`<span class="keyword">${k}</span>`).join('')}</div></div>`;card.querySelector('.domain-header').onclick=()=>{openDomains.has(idx)?openDomains.delete(idx):openDomains.add(idx);renderDomains()};domainGrid.appendChild(card)})}
function expandAll(){DATA.forEach(c=>openCategories.add(c.id));DOMAINS.forEach((_,i)=>openDomains.add(i));renderAll();renderDomains()}
function collapseAll(){openCategories.clear();openDomains.clear();renderAll();renderDomains()}
function resetProgress(){viewedServices.clear();localStorage.removeItem('viewedServices');renderAll()}
function randomQuestion(){const q=QUESTIONS[Math.floor(Math.random()*QUESTIONS.length)];alert('AWS Practice Question:\n\n'+q.question+'\n\nOptions:\n- '+q.answers.join('\n- '))}
function toggleTheme(){document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')}
function startQuiz(){quizStarted=true;currentQuizIndex=0;quizScore=0;loadQuiz()}
function loadQuiz(){answeredCurrent=false;const q=QUESTIONS[currentQuizIndex];document.getElementById('quizQuestion').textContent=q.question;const ans=document.getElementById('quizAnswers');ans.innerHTML='';q.answers.forEach(a=>{const b=document.createElement('button');b.className='answer-btn';b.textContent=a;b.onclick=()=>checkAnswer(b,a);ans.appendChild(b)});document.getElementById('quizScore').textContent=`Question ${currentQuizIndex+1} of ${QUESTIONS.length}`}
function checkAnswer(btn,a){if(answeredCurrent)return;answeredCurrent=true;const q=QUESTIONS[currentQuizIndex];if(a===q.correct){quizScore++;btn.classList.add('correct')}else{btn.classList.add('wrong');document.querySelectorAll('.answer-btn').forEach(b=>{if(b.textContent===q.correct)b.classList.add('correct')})}document.getElementById('quizScore').textContent=`Score: ${quizScore} / ${QUESTIONS.length}`}
function nextQuiz(){if(!quizStarted){startQuiz();return} if(currentQuizIndex<QUESTIONS.length-1){currentQuizIndex++;loadQuiz()}else{document.getElementById('quizQuestion').textContent='Quiz completed!';document.getElementById('quizAnswers').innerHTML='';document.getElementById('quizScore').textContent=`Final Score: ${quizScore} / ${QUESTIONS.length}`}}

document.getElementById('searchServices').addEventListener('input',e=>{searchText=e.target.value;if(searchText.trim())DATA.forEach(c=>openCategories.add(c.id));renderAll()});
document.getElementById('expandAllBtn').onclick=expandAll;document.getElementById('collapseAllBtn').onclick=collapseAll;document.getElementById('randomQuestionBtn').onclick=randomQuestion;document.getElementById('resetProgressBtn').onclick=resetProgress;document.getElementById('themeToggle').onclick=toggleTheme;document.getElementById('startQuizBtn').onclick=startQuiz;document.getElementById('nextQuizBtn').onclick=nextQuiz;
document.querySelectorAll('.tab-btn').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));b.classList.add('active');document.getElementById(b.dataset.view+'View').classList.add('active')});
document.addEventListener('keydown',e=>{if(e.key==='/'){e.preventDefault();document.getElementById('searchServices').focus()}});
if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark');renderFilters();renderAll();renderDomains();
