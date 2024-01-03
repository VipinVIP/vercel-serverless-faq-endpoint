const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    return await fn(req, res)
}

const handler = (req, res) => {
    const responseData = {
        "Using Duolingo": {
            "questions": [
                {
                    "question": "Why did my course change?",
                    "answer": "Course changes can occur due to updates, improvements, or adjustments to the Duolingo curriculum."
                },
                {
                    "question": "What is a streak?",
                    "answer": "A streak in Duolingo represents the consecutive days a user has practiced on the platform without a break."
                },
                {
                    "question": "What are leaderboards and leagues?",
                    "answer": "Leaderboards and leagues in Duolingo foster friendly competition by ranking users based on their language learning progress and daily achievements."
                },
                {
                    "question": "Does Duolingo use any open source libraries?",
                    "answer": "Yes, Duolingo utilizes various open source libraries as part of its technology stack to enhance the learning experience."
                }
            ]
        },
        "NOT Using Duolingo": {
            "questions": [
                {
                    "question": "Why did my course change?",
                    "answer": "Course changes can occur due to updates, improvements, or adjustments to the Duolingo curriculum."
                },
                {
                    "question": "What is a streak?",
                    "answer": "A streak in Duolingo represents the consecutive days a user has practiced on the platform without a break."
                },
                {
                    "question": "What are leaderboards and leagues?",
                    "answer": "Leaderboards and leagues in Duolingo foster friendly competition by ranking users based on their language learning progress and daily achievements."
                },
                {
                    "question": "Does Duolingo use any open source libraries?",
                    "answer": "Yes, Duolingo utilizes various open source libraries as part of its technology stack to enhance the learning experience."
                }
            ]
        },
    }
    res.end(responseData)
}

module.exports = allowCors(handler)

