# Next.js Firebase CRUD App

This is a [Next.js](https://nextjs.org) project implementing full CRUD (Create, Read, Update, Delete) functionality using [Firebase](https://firebase.google.com/) as the backend.

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd nextapp
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Firebase

- Create a project on [Firebase Console](https://console.firebase.google.com/).
- In your project, go to **Project Settings > General > Your apps** and register a new web app.
- Copy your Firebase config and create a file named `.env.local` in the root directory:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

- Make sure your `firebase.js` file uses these environment variables.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Features

- **Create**: Add new records to Firebase.
- **Read**: Fetch and display records from Firebase.
- **Update**: Edit existing records.
- **Delete**: Remove records from Firebase.

## Project Structure

```
/app
  /components
    Create.js
    Read.js
    Update.js
    Delete.js
  firebase.js
  page.js
```

## Deployment

You can deploy this app on [Vercel](https://vercel.com/) or any platform that supports Next.js.

---

Feel free to customize this project and refer to the [Next.js Documentation](https://nextjs.org/docs) and [Firebase Documentation](https://firebase.google.com/docs) for more details.
