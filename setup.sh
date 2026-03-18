#!/bin/bash

# Shaan Saurav Portfolio - Auto Setup Script
# This script automatically sets up the project

echo "🚀 Setting up Shaan Saurav Portfolio..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo "Please download and install Node.js from https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✓ Node.js detected${NC}"
echo ""

# Install root dependencies
echo -e "${YELLOW}📦 Installing root dependencies...${NC}"
npm install

echo ""

# Install frontend dependencies
echo -e "${YELLOW}📦 Installing frontend dependencies...${NC}"
cd frontend
npm install
cd ..

echo ""

# Install backend dependencies
echo -e "${YELLOW}📦 Installing backend dependencies...${NC}"
cd backend
npm install
cd ..

echo ""

# Create .env file if it doesn't exist
if [ ! -f "backend/.env" ]; then
    echo -e "${YELLOW}📝 Creating .env file...${NC}"
    cat > backend/.env << EOF
MONGODB_URI=mongodb://localhost:27017/shaan-portfolio
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
EOF
    echo -e "${GREEN}✓ .env file created${NC}"
    echo -e "${YELLOW}⚠️  Please update backend/.env with your credentials${NC}"
fi

echo ""

echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo ""
echo "1. Update backend/.env with your credentials:"
echo "   - MONGODB_URI: Your MongoDB connection string"
echo "   - EMAIL_USER: Your Gmail address"
echo "   - EMAIL_PASS: Your Gmail app password"
echo ""
echo "2. Start the backend:"
echo "   cd backend"
echo "   npm run dev"
echo ""
echo "3. In a new terminal, start the frontend:"
echo "   cd frontend"
echo "   npm start"
echo ""
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "📚 Read SETUP_GUIDE.md for more detailed instructions"
echo ""
