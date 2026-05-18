# AfyaMind Frontend Structure

The frontend has been refactored into separate HTML files for better organization and maintainability.

## File Structure

```
frontend/
├── home.html           # Main landing page
├── talk.html           # Chat with Afya (uses Gemini API)
├── help.html           # Find therapists
├── community.html      # Community groups
├── learn.html          # Learn & grow resources
├── exercises.html      # Wellness exercises
├── dashboard.html      # User dashboard
├── header.html         # Shared navigation component
├── styles.css          # All shared styles
├── common.js           # Shared functions and Gemini API logic
└── index.html          # (Legacy file - can be removed)
```

## How It Works

Each HTML file:
1. Includes `styles.css` for styling
2. Loads `header.html` dynamically via JavaScript
3. Includes `common.js` for shared functions

## Running the App

### Frontend
```bash
cd frontend
# Open any .html file in your browser
# Or use a local server: python -m http.server 5500
```

### Backend
```bash
cd backend
npm install
npm run dev
# Backend runs on http://localhost:3001
```

## Key Features

- **Gemini API Integration**: Talk.html uses Google's Gemini API for AI responses
- **Multi-language Support**: English and Swahili
- **Crisis Detection**: Automatic crisis modal and resources
- **Responsive Design**: Works on all screen sizes

## Environment Setup

### Backend (.env)
```
PORT=3001
GEMINI_API_KEY=your_gemini_api_key_here
FRONTEND_URL=http://localhost:5500
```

Get a free Gemini API key at: https://aistudio.google.com/app/apikey

## Fixed Issues

✅ **Messaging Bug**: Fixed function name mismatch (addMsg → addMessage) in talk.html
✅ **Separated Pages**: Code is now organized into separate files instead of one large HTML file
✅ **API Integration**: Updated to use Gemini API instead of Anthropic

## Navigation

- Click "Home" to go to the landing page
- Click "Talk to Afya" to start a chat
- Click "Find Help" to browse therapists
- Click "Community" to join support groups
- Click "Learn" to access resources
- Click "Exercises" for wellness tools
- Click "Dashboard" for your user overview

## Customization

To add new pages:
1. Create a new HTML file
2. Include the shared `styles.css` and `common.js`
3. Load `header.html` with the included JavaScript snippet
4. Add links to your new page in `header.html`

