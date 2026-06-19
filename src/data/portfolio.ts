export interface Skill {
  name: string;
  level: number; // 0-100
  iconName?: string; // used to map to Lucide icons dynamically
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string; // placeholder image path or svg generator
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  caseStudySlug?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Freelance' | 'Contract' | 'Personal Project';
  duration: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  coursework: string[];
  gpa?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  slug: string;
  content?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  introduction: string;
  bio: string[];
  interests: string[];
  careerGoals: string[];
  email: string;
  linkedin: string;
  github: string;
}

export const portfolioData: {
  personalInfo: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  articles: Article[];
} = {
  personalInfo: {
    name: "JAY PAUL",
    title: "Backend Engineer & AI Agent Architect",
    subtitle: "Building intelligent agents and scalable backend services.",
    introduction: "I specialize in Generative AI, AI Agents, and robust backend engineering. Proficient in designing agentic workflows, RAG pipelines, and cloud-native backend systems.",
    bio: [
      "I'm a Computer Science student and backend engineer based in Indore, India, with a strong interest in building intelligent systems and understanding how people interact with technology.",
      "My work primarily focuses on Generative AI, backend engineering, and agentic workflows, but outside of software I spend a significant amount of time reading literature, studying languages, and playing chess. These interests shape the way I approach engineering problems—through curiosity, pattern recognition, and continuous learning.",
      "Whether I'm designing AI-powered applications, exploring new ideas in technology, or working through a difficult chess position, I'm driven by the same goal: understanding complex systems and finding elegant solutions.",
      "Currently, I'm focused on building scalable AI applications and expanding my expertise in backend architecture, retrieval systems, and intelligent automation."
    ],
    interests: [
      "Building AI Agents",
      "Backend Engineering",
      "Semantic Search",
      "Literature & Reading",
      "Chess & Strategy",
      "Continuous Learning"
    ],
    careerGoals: [
      "Build reliable AI agents that solve real business problems.",
      "Specialize in AI infrastructure, RAG systems, and agent orchestration.",
      "Contribute to the next generation of developer tools and AI frameworks.",
      "Lead the design of scalable backend platforms for AI applications.",
      "Create products that make advanced AI accessible to non-technical users."
    ],
    email: "jaypaul1515@gmail.com",
    linkedin: "https://www.linkedin.com/in/jay-paul1530/",
    github: "https://github.com/jay-paul1530"
  },
  skills: [
    {
      title: "Backend & Systems",
      skills: [
        { name: "Python / FastAPI / Django", level: 95, iconName: "Code" },
        { name: "PostgreSQL / SQL", level: 90, iconName: "Database" },
        { name: "REST APIs & Webhooks", level: 95, iconName: "Globe" },
        { name: "Docker / Sandbox Environments", level: 85, iconName: "Terminal" }
      ]
    },
    {
      title: "AI Agents & LLM Tech",
      skills: [
        { name: "OpenAI Agents SDK", level: 90, iconName: "Cpu" },
        { name: "Model Context Protocol (MCP)", level: 92, iconName: "Network" },
        { name: "RAG & Semantic Search", level: 90, iconName: "Search" },
        { name: "Multi-Agent Systems", level: 85, iconName: "Workflow" }
      ]
    },
    {
      title: "Vector DBs & Tools",
      skills: [
        { name: "Weaviate / Pinecone / ChromaDB", level: 90, iconName: "Layers" },
        { name: "Langfuse / Langsmith", level: 80, iconName: "Eye" },
        { name: "Ollama / HuggingFace", level: 85, iconName: "Sparkles" },
        { name: "Streamlit / Postman", level: 90, iconName: "Layout" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-4",
      title: "InsightFlow AI",
      description: "An enterprise Text-to-SQL platform enabling natural language access to complex corporate databases, featuring schema-aware agentic validation.",
      longDescription: "Employs Weaviate, OpenRouter, and MCP function calling to generate, validate, and securely execute SQL queries, reducing manual query-writing effort by 80%.",
      image: "/projects/insightflow.jpg",
      tags: ["FastAPI", "Supabase", "Weaviate", "MCP", "PostgreSQL"],
      liveUrl: "https://insight-flow-ai-tau.vercel.app/",
      githubUrl: "https://github.com/jay-paul1530/insightflow-ai",
      featured: false,
      caseStudySlug: "insightflow-ai-analytics"
    },
    {
      id: "proj-2",
      title: "InboxAI",
      description: "An AI-powered email assistant with semantic search and Retrieval-Augmented Generation (RAG) over 10,000+ emails, integrated with Gmail API and vector search.",
      longDescription: "A training project at Systango Technologies that uses FastAPI and Jina Embeddings to index, ingest, and contextualize emails, reducing search lookup time by 60%.",
      image: "/projects/inboxai.jpg",
      tags: ["Python", "FastAPI", "Gmail API", "Weaviate", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/jay-paul1530/inboxai",
      featured: true,
      caseStudySlug: "inboxai-email-intelligence"
    },
    {
      id: "proj-3",
      title: "JarvisAI Chatbot",
      description: "An LLM-powered chatbot using Llama 3.1 with RAG architecture for context-aware question answering, custom vector stores, and an interactive Streamlit UI.",
      longDescription: "Built with Ollama, ChromaDB, and Nomic Embeddings to search custom knowledge bases, increasing standalone LLM response relevance by approximately 40% while reducing hallucinations.",
      image: "/projects/jarvisai.jpg",
      tags: ["Streamlit", "Llama 3.1", "Ollama", "ChromaDB", "FastAPI"],
      liveUrl: "#",
      githubUrl: "https://github.com/jay-paul1530/jarvisai-chatbot",
      featured: true,
      caseStudySlug: "jarvisai-conversational-assistant"
    },
    {
      id: "proj-1",
      title: "AssistSphere AI",
      description: "A multi-agent customer support platform for automated query resolution, ticket creation, and intelligent routing. Implemented RAG-based knowledge retrieval and tool-calling.",
      longDescription: "Developed at Systango Technologies, this platform utilizes Weaviate, LiteLLM, and OpenAI Agents SDK to achieve 70%+ automated first-response coverage, reducing manual ticket triaging effort by 45%.",
      image: "/projects/assistsphere.jpg",
      tags: ["Python", "FastAPI", "OpenAI Agents SDK", "Weaviate", "MCP", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/jay-paul1530/assistsphere-ai",
      featured: true,
      caseStudySlug: "assistsphere-ai-automation"
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "AI/ML Intern",
      company: "Systango Technologies, Indore",
      location: "Indore, India",
      type: "Internship",
      duration: "Nov 2025 - March 2026",
      description: [
        "Developed AI-powered applications using FastAPI, OpenAI Agents SDK, Weaviate, PostgreSQL, and Docker.",
        "Built Retrieval-Augmented Generation (RAG) pipelines and semantic search systems, reducing information retrieval time by approximately 60%.",
        "Designed multi-agent workflows with tool-calling capabilities, automating routine support and operational tasks with 70%+ first-response coverage.",
        "Designed scalable APIs and vector-search solutions for enterprise AI applications."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.E. in Computer Science and Engineering",
      institution: "IES IPS Academy, Indore",
      location: "Indore, India",
      duration: "2022 - 2026",
      gpa: "CGPA: 7.3",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Object Oriented Programming",
        "Computer Networks",
        "Software Engineering"
      ]
    },
    {
      id: "edu-2",
      degree: "Senior Secondary (12th Grade)",
      institution: "Karnataka Vidya Niketan",
      location: "Karnataka, India",
      duration: "2020 - 2022",
      gpa: "Percentage: 79%",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English"
      ]
    }
  ],
  articles: [
    {
      id: "art-1",
      title: "InsightFlow AI: Natural Language Analytics for Enterprise Databases",
      excerpt: "Transforming business questions into executable SQL through retrieval-augmented generation, schema-aware reasoning, and intelligent query orchestration.",
      date: "June 20, 2026",
      readingTime: "6 min read",
      tags: ["FastAPI", "Supabase", "Weaviate", "OpenRouter", "RAG", "Text-to-SQL"],
      slug: "insightflow-ai-analytics",
      content: `# InsightFlow AI: Natural Language Analytics for Enterprise Databases

> "Transforming business questions into executable SQL through retrieval-augmented generation, schema-aware reasoning, and intelligent query orchestration."

---

## Overview & Architecture

InsightFlow AI is a Text-to-SQL platform designed to bridge the gap between non-technical users and enterprise databases.

The system enables users to ask questions in natural language and receive accurate, database-backed answers without writing SQL manually. By combining Retrieval-Augmented Generation (RAG), vector search, and large language models, InsightFlow AI understands database schemas, identifies relevant tables, generates SQL queries, executes them securely, and returns structured insights.

The primary objective was to reduce dependency on technical teams for routine data access while maintaining query accuracy and scalability.

---

## Problem Statement

Business users often require insights stored within relational databases but lack SQL expertise.

Traditional BI tools require dashboards to be created beforehand, while ad-hoc questions still depend on analysts or engineers.

Challenges included:

- Understanding complex database schemas
- Mapping natural language to SQL
- Reducing hallucinated queries
- Handling large enterprise datasets
- Maintaining low-latency responses

---

## System Architecture

\`\`\`text
User Query
     │
     ▼
FastAPI Backend
     │
     ▼
Schema Retrieval Layer
     │
     ├── Supabase PostgreSQL
     └── Weaviate Vector Search
     │
     ▼
Context Builder
     │
     ▼
OpenRouter LLM
     │
     ▼
SQL Generation
     │
     ▼
Query Validation
     │
     ▼
Database Execution
     │
     ▼
Response Generation
     │
     ▼
User
\`\`\`

---

## Tech Stack

### Backend
- Python
- FastAPI
- AsyncPG

### Database
- Supabase PostgreSQL

### Vector Search
- Weaviate

### LLM Infrastructure
- OpenRouter
- LiteLLM

### Embeddings
- Jina Embeddings

### Frontend & Deployment
- Next.js
- Vercel

---

## Key Features

### Schema-Aware Retrieval

Database schemas are embedded and indexed in Weaviate, allowing the system to retrieve only the most relevant context before SQL generation.

### Natural Language to SQL

Users can ask questions in plain English and receive generated SQL along with database-backed results.

### Retrieval-Augmented Generation

Relevant schema information is retrieved before generation, improving query accuracy and reducing hallucinations.

### Conversational Analytics

The assistant maintains recent context, enabling follow-up questions and iterative data exploration.

### Secure Query Execution

Generated SQL is validated before execution to reduce invalid or unsafe operations.

---

## Technical Challenges

### Context Selection

Providing too much schema information increased token usage and reduced generation quality.

**Solution**

Implemented semantic retrieval using Weaviate to supply only relevant schema context.

---

### Hallucinated SQL

Early generations frequently referenced non-existent tables and columns.

**Solution**

Added schema retrieval and prompt constraints to ensure generated SQL aligned with actual database structures.

---

### Response Latency

Retrieval, generation, and execution introduced multiple network calls.

**Solution**

Optimized asynchronous database operations and streamlined retrieval workflows.

---

## Outcomes

- Reduced manual SQL dependency
- Improved accessibility for non-technical users
- Faster ad-hoc data exploration
- Increased query accuracy through schema-aware retrieval
- Built a scalable architecture for enterprise datasets`
    },
    {
      id: "art-2",
      title: "InboxAI: AI-Powered Email Intelligence & Semantic Search",
      excerpt: "Transforming thousands of emails into a searchable knowledge base through semantic retrieval, AI-powered search, and contextual response generation.",
      date: "Jan 18, 2026",
      readingTime: "7 min read",
      tags: ["FastAPI", "Gmail API", "Weaviate", "OpenAI Agents SDK", "RAG"],
      slug: "inboxai-email-intelligence",
      content: `# InboxAI: AI-Powered Email Intelligence & Semantic Search

> "Transforming thousands of emails into a searchable knowledge base through semantic retrieval, AI-powered search, and contextual response generation."

---

## Overview & Architecture

InboxAI is an AI-powered email assistant designed to help users efficiently search, retrieve, and interact with large volumes of email data.

The platform combines Gmail integration, vector search, and Retrieval-Augmented Generation (RAG) to index email content, understand user intent, and provide context-aware responses. Instead of relying on traditional keyword searches, InboxAI uses semantic retrieval to locate relevant emails based on meaning and context.

The primary objective was to reduce email discovery time and improve information accessibility across large inboxes containing thousands of messages.

---

## Problem Statement

Modern inboxes often contain years of conversations, making it difficult to locate relevant information through conventional search methods.

Challenges included:

* Searching across large email datasets
* Understanding user intent beyond keywords
* Retrieving contextually relevant conversations
* Reducing email lookup time
* Generating meaningful responses from retrieved content

---

## System Architecture

\`\`\`text
Gmail API
    │
    ▼
Email Ingestion Service
    │
    ▼
Embedding Generation
    │
    ▼
Weaviate Vector Database
    │
    ▼
Semantic Retrieval
    │
    ▼
OpenAI Agents SDK
    │
    ▼
Context-Aware Response Generation
    │
    ▼
User
\`\`\`

---

## Tech Stack

### Backend

* Python
* FastAPI

### Data Storage

* PostgreSQL

### Vector Search

* Weaviate

### AI Infrastructure

* OpenAI Agents SDK
* LiteLLM

### Integrations

* Gmail API

### Embeddings

* Jina Embeddings

### Deployment

* Docker

---

## Key Features

### Semantic Email Search

Searches emails based on meaning rather than exact keyword matches.

### Retrieval-Augmented Generation

Retrieves relevant email context before generating responses, improving answer quality and relevance.

### Gmail Integration

Automatically ingests and indexes emails through Gmail APIs.

### Contextual Responses

Generates AI-powered responses using retrieved email conversations and metadata.

### Large-Scale Email Indexing

Supports efficient retrieval across datasets containing 10,000+ emails.

---

## Technical Challenges

### Email Retrieval Accuracy

Keyword-based approaches often failed to surface the most relevant emails.

**Solution**

Implemented vector embeddings and semantic retrieval workflows using Weaviate.

---

### Large Email Volumes

Searching across thousands of emails introduced performance challenges.

**Solution**

Built an indexing pipeline that converts emails into embeddings for efficient vector-based retrieval.

---

### Context Preservation

Individual emails often lacked enough context for meaningful responses.

**Solution**

Combined semantic retrieval with RAG workflows to provide the model with relevant conversation history before response generation.

---

## Outcomes

* Indexed and searched 10,000+ emails
* Reduced email lookup time by approximately 60%
* Improved search relevance through semantic retrieval
* Enabled context-aware AI-generated responses
* Built scalable FastAPI services for ingestion, indexing, and retrieval`
    },
    {
      id: "art-3",
      title: "JarvisAI: Context-Aware Conversational Assistant",
      excerpt: "Enhancing LLM responses through retrieval-augmented generation, semantic search, and context-aware knowledge retrieval.",
      date: "Jan 05, 2026",
      readingTime: "5 min read",
      tags: ["FastAPI", "Streamlit", "Llama 3.1", "Ollama", "ChromaDB", "RAG"],
      slug: "jarvisai-conversational-assistant",
      content: `# JarvisAI: Context-Aware Conversational Assistant

> "Enhancing LLM responses through retrieval-augmented generation, semantic search, and context-aware knowledge retrieval."

---

## Overview & Architecture

JarvisAI is an LLM-powered chatbot designed to provide accurate, context-aware responses using Retrieval-Augmented Generation (RAG).

Unlike traditional chatbots that rely solely on a language model's training data, JarvisAI retrieves relevant information from custom knowledge bases before generating responses. By combining Llama 3.1, vector search, and semantic retrieval, the system delivers more reliable answers while reducing hallucinations.

The primary objective was to create a locally hosted AI assistant capable of answering domain-specific questions using external knowledge sources.

---

## Problem Statement

Traditional LLMs often struggle with domain-specific information and may generate inaccurate or hallucinated responses when asked about content outside their training data.

Challenges included:

* Providing accurate responses from custom knowledge bases
* Reducing hallucinations
* Retrieving relevant context efficiently
* Maintaining conversational flow
* Running the system locally without external dependencies

---

## System Architecture

\`\`\`text
User Query
    │
    ▼
Streamlit Interface
    │
    ▼
FastAPI Backend
    │
    ▼
Semantic Retrieval
    │
    ▼
ChromaDB
    │
    ▼
Relevant Context
    │
    ▼
Llama 3.1 (Ollama)
    │
    ▼
Response Generation
    │
    ▼
User
\`\`\`

---

## Tech Stack

### Backend

* Python
* FastAPI

### Frontend

* Streamlit

### LLM

* Llama 3.1
* Ollama

### Vector Database

* ChromaDB

### Embeddings

* Nomic Embeddings

### AI Framework

* Retrieval-Augmented Generation (RAG)

---

## Key Features

### Knowledge Base Search

Indexes and retrieves information from custom datasets using semantic search.

### Retrieval-Augmented Generation

Provides relevant context to the language model before response generation.

### Context-Aware Conversations

Maintains conversational relevance by combining retrieved knowledge with user queries.

### Local LLM Deployment

Runs entirely through Ollama, enabling local inference without reliance on cloud-hosted models.

### Semantic Search

Uses embeddings and vector similarity search to locate the most relevant information from the knowledge base.

---

## Technical Challenges

### Hallucinated Responses

Standalone LLM responses were often inaccurate when answering knowledge-specific questions.

**Solution**

Implemented RAG workflows that retrieved relevant context before generation.

---

### Retrieval Relevance

Early retrieval pipelines occasionally surfaced unrelated information.

**Solution**

Used Nomic Embeddings and vector similarity search through ChromaDB to improve retrieval quality.

---

### Local Performance Constraints

Running large language models locally introduced latency and resource limitations.

**Solution**

Optimized retrieval workflows and leveraged Ollama for efficient local model serving.

---

## Outcomes

* Built a fully functional RAG-powered chatbot
* Improved response relevance by approximately 40% compared to standalone LLM responses
* Reduced hallucinations through contextual retrieval
* Enabled real-time conversational interactions through Streamlit and FastAPI
* Demonstrated practical implementation of vector search, embeddings, and local LLM deployment`
    },
    {
      id: "art-4",
      title: "AssistSphere AI: Multi-Agent Customer Support Automation Platform",
      excerpt: "Automating customer support workflows through multi-agent orchestration, intelligent routing, and retrieval-augmented knowledge retrieval.",
      date: "March 15, 2026",
      readingTime: "6 min read",
      tags: ["FastAPI", "OpenAI Agents SDK", "Weaviate", "PostgreSQL", "MCP", "Multi-Agent"],
      slug: "assistsphere-ai-automation",
      content: `# AssistSphere AI: Multi-Agent Customer Support Automation Platform

> "Automating customer support workflows through multi-agent orchestration, intelligent routing, and retrieval-augmented knowledge retrieval."

---

## Overview & Architecture

AssistSphere AI is a multi-agent customer support platform designed to automate query resolution, ticket creation, and support operations.

The platform combines AI agents, Retrieval-Augmented Generation (RAG), and tool-calling workflows to classify incoming requests, retrieve relevant knowledge, create support tickets, and route issues to the appropriate teams. By coordinating multiple specialized agents, AssistSphere AI reduces manual intervention while improving response efficiency.

The primary objective was to streamline support operations, reduce ticket triaging effort, and increase automated first-response coverage.

---

## Problem Statement

Customer support teams often spend significant time manually categorizing requests, searching knowledge bases, and routing tickets to the correct departments.

Challenges included:

* High volumes of incoming support requests
* Manual ticket classification and prioritization
* Delayed first responses
* Knowledge retrieval across large support datasets
* Efficient routing of issues to specialized teams

---

## System Architecture

\`\`\`text
Customer Query
      │
      ▼
Gateway Agent
      │
      ├── Classification Agent
      ├── Knowledge Retrieval Agent
      ├── Ticket Creation Agent
      └── Routing Agent
      │
      ▼
Weaviate Knowledge Base
      │
      ▼
OpenAI Agents SDK
      │
      ▼
Response / Ticket Action
      │
      ▼
Customer
\`\`\`

---

## Tech Stack

### Backend

* Python
* FastAPI

### Agent Framework

* OpenAI Agents SDK
* LiteLLM

### Database

* PostgreSQL

### Vector Search

* Weaviate

### Embeddings

* Jina Embeddings

### Integrations

* MCP
* Tool Calling

### Deployment

* Docker

---

## Key Features

### Multi-Agent Architecture

Specialized AI agents collaborate to handle classification, retrieval, ticket creation, and routing tasks.

### Automated Ticket Creation

Generates and manages support tickets directly from customer requests.

### Intelligent Routing

Routes requests to the appropriate support channels based on issue type and priority.

### Retrieval-Augmented Generation

Retrieves relevant knowledge base content before generating responses.

### Tool-Calling Workflows

Enables agents to perform actions beyond text generation, including ticket management and operational workflows.

---

## Technical Challenges

### Support Request Classification

Incoming requests varied significantly in intent, urgency, and complexity.

**Solution**

Implemented AI-powered classification workflows to automatically categorize and prioritize support requests.

---

### Knowledge Retrieval Accuracy

Support responses required access to accurate and relevant organizational knowledge.

**Solution**

Integrated Weaviate and Jina Embeddings to enable semantic retrieval of relevant support documentation.

---

### Manual Ticket Triaging

Support teams spent considerable time reviewing and routing incoming tickets.

**Solution**

Developed automated routing and prioritization workflows using agent-based decision-making.

---

## Outcomes

* Achieved 70%+ automated first-response coverage
* Reduced manual ticket triaging effort by approximately 45%
* Improved response consistency through RAG-powered knowledge retrieval
* Automated ticket creation and intelligent routing workflows
* Built scalable FastAPI APIs for support automation and operational monitoring`
    }
  ]
};
