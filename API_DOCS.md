# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### 1. Health Check
**GET** `/health`

Check if the server is running.

**Response:**
```json
{
  "status": "Server is running"
}
```

---

### 2. Contact Form
**POST** `/contact`

Submit a contact form message.

**Request Body:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "message": "Your message here"
}
```

**Validation Rules:**
- `name`: Required, non-empty string
- `email`: Required, valid email format
- `message`: Required, non-empty string

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Error Response (400):**
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name"
    }
  ]
}
```

**Features:**
- Validates all inputs
- Saves message to MongoDB
- Sends email to admin
- Sends confirmation email to user

---

### 3. Get All Projects
**GET** `/projects`

Retrieve all projects.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Online Multi-Language Compiler",
    "category": "fullstack",
    "tech": ["React", "Node.js", "Express", "MongoDB", "JWT"],
    "description": "A full-stack IDE...",
    "github": "https://github.com/..."
  },
  {
    "id": 2,
    "title": "AR Educational Content Viewer",
    "category": "fullstack",
    "tech": ["React", "Node.js", "MongoDB"],
    "description": "Interactive AR platform...",
    "github": "https://github.com/..."
  }
]
```

---

### 4. Get All Skills
**GET** `/skills`

Retrieve all skills grouped by category.

**Response:**
```json
{
  "languages": ["C++", "JavaScript", "C", "PHP"],
  "frontend": ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  "backend": ["Node.js", "Express", "MongoDB", "MySQL", "JWT"],
  "tools": ["Git", "VS Code", "Thunder Client", "Postman", "AWS"],
  "softSkills": ["Problem Solving", "Team Collaboration", "Adaptability", "Communication"]
}
```

---

## Error Handling

### Common Error Responses

**400 Bad Request:**
- Invalid input data
- Missing required fields
- Invalid email format

**404 Not Found:**
- Endpoint doesn't exist
- Resource not found

**500 Internal Server Error:**
- Server error
- Database connection error
- Email sending error

### Error Response Format
```json
{
  "error": "Error description",
  "status": 500
}
```

---

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (development)
- `https://yourdomain.com` (production)

To update CORS settings, edit `server.js`:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com'],
  credentials: true,
}));
```

---

## Authentication (Future)

JWT tokens can be added for protected routes:

```javascript
// Protected route example
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data' });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
```

---

## Rate Limiting (Future)

Implement rate limiting to prevent abuse:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## Caching (Future)

Implement caching for better performance:

```javascript
const cache = require('memory-cache');

app.get('/api/projects', (req, res) => {
  const cachedProjects = cache.get('projects');
  
  if (cachedProjects) {
    return res.json(cachedProjects);
  }
  
  // Fetch from database
  const projects = [...];
  
  // Cache for 1 hour
  cache.put('projects', projects, 3600000);
  
  res.json(projects);
});
```

---

## Example Requests

### Using cURL

```bash
# Health check
curl http://localhost:5000/api/health

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }'

# Get projects
curl http://localhost:5000/api/projects

# Get skills
curl http://localhost:5000/api/skills
```

### Using Fetch (JavaScript)

```javascript
// Create contact message
fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello!'
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

### Using Axios (JavaScript)

```javascript
import axios from 'axios';

// Create contact message
axios.post('http://localhost:5000/api/contact', {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!'
})
.then(res => console.log(res.data))
.catch(err => console.error(err.response.data));
```

---

## Environment Variables

Required environment variables:

```
MONGODB_URI=mongodb://localhost:27017/shaan-portfolio
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

---

## Database Schema

### Contact Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  message: String,
  createdAt: Date
}
```

---

## Troubleshooting

**API returns 404**
- Check base URL
- Verify endpoint path
- Check if server is running

**CORS error**
- Verify frontend URL in CORS configuration
- Check request headers

**Email not sending**
- Verify email credentials in .env
- Check Gmail app password
- Enable less secure apps (if needed)

**Database connection error**
- Verify MongoDB is running
- Check connection string
- Verify firewall settings

---

For more information, see the main README.md
