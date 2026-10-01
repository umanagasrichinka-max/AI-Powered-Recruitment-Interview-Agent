/**
 * HireAI - Data Store & LocalStorage Manager
 */

const INITIAL_JOBS = [
    {
        id: 'job-1',
        title: 'Senior AI / Machine Learning Engineer',
        skills: ['Python', 'SQL', 'Machine Learning', 'PyTorch', 'Communication'],
        education: 'B.Tech / M.Tech in Computer Science or Data Science',
        experience: '3-5 years',
        description: 'Lead the design and deployment of predictive machine learning models, PyTorch pipelines, and scalable database integrations. Collaborate with cross-functional teams to deliver end-to-end AI capabilities.',
        applicantsCount: 12,
        screenedCount: 10,
        createdAt: '2026-09-20'
    },
    {
        id: 'job-2',
        title: 'Frontend React & UI Architect',
        skills: ['React', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'State Management'],
        education: "Bachelor's in Computer Science or Equivalent",
        experience: '3-5 years',
        description: 'Build high-performance, accessible, and ultra-responsive web applications using React, modern CSS systems, and dynamic visualization components.',
        applicantsCount: 9,
        screenedCount: 8,
        createdAt: '2026-09-22'
    },
    {
        id: 'job-3',
        title: 'Full Stack Python & Data Engineer',
        skills: ['Python', 'Django', 'SQL', 'PostgreSQL', 'Docker'],
        education: 'B.S. in Computer Science',
        experience: '1-3 years',
        description: 'Develop reliable REST APIs, manage database schemas, and optimize ETL data processing scripts using Python and Docker containerized pipelines.',
        applicantsCount: 7,
        screenedCount: 6,
        createdAt: '2026-09-25'
    }
];

const INITIAL_CANDIDATES = [
    {
        id: 'c1',
        name: 'Rahul Sharma',
        email: 'rahul.sharma@example.com',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        jobId: 'job-1',
        jobTitle: 'Senior AI / Machine Learning Engineer',
        matchScore: 88,
        status: 'Interview Ready', // 'Pending', 'Interview Ready', 'Completed', 'Rejected'
        extractedData: {
            education: 'B.Tech in Computer Science (GPA 3.8/4.0)',
            skills: ['Python', 'SQL', 'Machine Learning', 'PyTorch', 'Data Analysis', 'Git'],
            projects: [
                { name: 'ML Prediction Project', desc: 'Built high-precision XGBoost & PyTorch model for customer churn forecasting with 94% accuracy.' },
                { name: 'Python Data Analysis Pipeline', desc: 'Automated ETL pipeline processing 50GB+ daily data using Pandas, SQL, and Airflow.' }
            ],
            experience: '3.5 Years as Data Scientist at Tech Data Labs',
            certifications: ['AWS Certified Machine Learning Specialist', 'TensorFlow Developer Certificate']
        },
        evidenceAnalysis: [
            { skill: 'Python', status: '✓ Matched', evidence: '3.5 yrs Python experience, built ML pipeline libraries and custom Pandas transformers.' },
            { skill: 'SQL', status: '✓ Matched', evidence: 'Optimized complex SQL queries and window functions in Data Analysis Pipeline project.' },
            { skill: 'Machine Learning', status: '✓ Matched', evidence: 'Developed XGBoost, PyTorch, and Scikit-Learn models in production.' },
            { skill: 'Communication', status: '⚠ Assessment Needed', evidence: 'Resume indicates project presentation, but needs live verbal assessment.' }
        ],
        interviewFocusAreas: [
            'Deep dive into Python ML Prediction project architecture',
            'SQL optimization and windowing techniques',
            'Communication clarity when explaining model trade-offs'
        ],
        interviewSession: {
            currentQuestionIndex: 0,
            questions: [
                {
                    id: 1,
                    topic: 'Python & ML Project',
                    question: 'Explain one Python project you have worked on.',
                    answer: 'I developed an ML Prediction model using Python, PyTorch, and Pandas to forecast customer churn. I structured the code into clean modular components, conducted feature engineering on temporal datasets, and deployed the trained model as a REST API endpoint serving over 10k requests daily.',
                    feedback: 'Excellent breakdown of architecture, modular code organization, and model serving experience.'
                },
                {
                    id: 2,
                    topic: 'Machine Learning Model Tuning',
                    question: 'How did you handle hyperparameter tuning and prevent overfitting in your ML prediction project?',
                    answer: 'I used Stratified K-Fold cross-validation combined with Optuna for Bayesian hyperparameter optimization. To prevent overfitting, I applied L2 regularization, dropout layers in PyTorch, and early stopping based on validation loss.',
                    feedback: 'Solid technical depth in regularization techniques and hyperparameter optimization tools.'
                },
                {
                    id: 3,
                    topic: 'SQL & Data Pipelines',
                    question: 'Can you describe a challenging SQL query or data optimization problem you solved?',
                    answer: 'In our data pipeline, daily aggregation queries were timing out. I rewritten the nested queries using Common Table Expressions (CTEs) and window functions like LEAD/LAG, added compound indexes on foreign keys, which reduced query latency by 75%.',
                    feedback: 'Demonstrates practical understanding of index strategy and modern SQL window functions.'
                },
                {
                    id: 4,
                    topic: 'Communication & Stakeholders',
                    question: 'How do you communicate complex machine learning metrics to non-technical business stakeholders?',
                    answer: 'Instead of focusing solely on log-loss or AUC-ROC, I translate metrics into business impact—such as estimated cost reduction or customer retention rates. I also build simple interactive Streamlit dashboards so business leaders can explore model predictions visually.',
                    feedback: 'Strong communication awareness and stakeholder empathy.'
                },
                {
                    id: 5,
                    topic: 'Problem Solving & Failure Recovery',
                    question: 'Describe a situation where a deployed model underperformed in production and how you fixed it.',
                    answer: 'We experienced data drift due to seasonal consumer behavior shifts. The model accuracy dropped by 12%. I setup automated monitoring with Evidently AI to trigger retraining pipelines when feature distributions drifted beyond threshold limits.',
                    feedback: 'Outstanding MLOps awareness and proactive monitoring capability.'
                }
            ],
            completed: true
        },
        report: {
            techTopics: ['Python Architectures', 'PyTorch & XGBoost Modeling', 'SQL Window Functions & Indexing', 'MLOps & Drift Monitoring'],
            commScore: 'Strong & Structured (4.8/5.0)',
            evidenceSummary: 'Rahul demonstrated exceptional hands-on experience in Python ML systems and database tuning. Answers were backed up with concrete metrics (75% latency reduction, 10k daily API requests).',
            reviewAreas: [
                'Probe multi-GPU training scalability if assigned to LLM fine-tuning team.',
                'Verify experience with Kubernetes helm charts.'
            ],
            summary: 'Rahul Sharma is a high-caliber candidate for the Senior AI / Machine Learning Engineer position. Demonstrates strong technical foundation, MLOps maturity, and clear technical communication.'
        }
    },
    {
        id: 'c2',
        name: 'Ananya Roy',
        email: 'ananya.roy@example.com',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        jobId: 'job-2',
        jobTitle: 'Frontend React & UI Architect',
        matchScore: 94,
        status: 'Interview Ready',
        extractedData: {
            education: "Bachelor's in Information Technology",
            skills: ['React', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'Redux', 'Web Vitals'],
            projects: [
                { name: 'E-Commerce Micro-Frontend', desc: 'Built modular React components with 99+ lighthouse score.' },
                { name: 'Design System Library', desc: 'Authored company-wide Tailwind UI library with 50+ re-usable accessible widgets.' }
            ],
            experience: '4 Years as Senior Frontend Engineer',
            certifications: ['Meta Front-End Developer Professional Certificate']
        },
        evidenceAnalysis: [
            { skill: 'React', status: '✓ Matched', evidence: '4 yrs experience crafting stateful React components and hooks.' },
            { skill: 'JavaScript', status: '✓ Matched', evidence: 'Deep ES6+, async/await, and event-loop mastery.' },
            { skill: 'Tailwind CSS', status: '✓ Matched', evidence: 'Authored multi-theme design systems using Tailwind.' },
            { skill: 'TypeScript', status: '✓ Matched', evidence: 'Strict mode TypeScript usage across all production frontend repos.' }
        ],
        interviewFocusAreas: [
            'Component re-render optimization techniques',
            'Micro-frontend architecture and state sharing'
        ],
        interviewSession: {
            currentQuestionIndex: 0,
            questions: [
                {
                    id: 1,
                    topic: 'React Performance',
                    question: 'Explain how you optimize heavy re-renders in a complex React dashboard.',
                    answer: 'I use memoization (useMemo, useCallback), split global context into granular selectors, and implement virtualized lists (react-window) for large data tables.',
                    feedback: 'High proficiency in React rendering lifecycle.'
                }
            ],
            completed: false
        },
        report: null
    }
];

class HireAIDataStore {
    constructor() {
        this.init();
    }

    init() {
        if (!localStorage.getItem('hireai_jobs')) {
            localStorage.setItem('hireai_jobs', JSON.stringify(INITIAL_JOBS));
        }
        if (!localStorage.getItem('hireai_candidates')) {
            localStorage.setItem('hireai_candidates', JSON.stringify(INITIAL_CANDIDATES));
        }
    }

    getJobs() {
        return JSON.parse(localStorage.getItem('hireai_jobs') || '[]');
    }

    saveJob(job) {
        const jobs = this.getJobs();
        jobs.unshift(job);
        localStorage.setItem('hireai_jobs', JSON.stringify(jobs));
        return jobs;
    }

    getCandidates() {
        return JSON.parse(localStorage.getItem('hireai_candidates') || '[]');
    }

    getCandidateById(id) {
        const candidates = this.getCandidates();
        return candidates.find(c => c.id === id);
    }

    saveCandidate(candidate) {
        const candidates = this.getCandidates();
        const existingIdx = candidates.findIndex(c => c.id === candidate.id);
        if (existingIdx >= 0) {
            candidates[existingIdx] = candidate;
        } else {
            candidates.unshift(candidate);
        }
        localStorage.setItem('hireai_candidates', JSON.stringify(candidates));
        return candidates;
    }

    reset() {
        localStorage.setItem('hireai_jobs', JSON.stringify(INITIAL_JOBS));
        localStorage.setItem('hireai_candidates', JSON.stringify(INITIAL_CANDIDATES));
    }
}

const dataStore = new HireAIDataStore();
