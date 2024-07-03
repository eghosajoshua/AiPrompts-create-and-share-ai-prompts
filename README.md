# AiPrompts

AiPrompts is a collaborative platform that allows users to share and discover useful AI prompts. Built with Next.js, it provides a seamless and interactive user experience. The platform includes Google authentication for secure login and utilizes MongoDB for robust data storage.

## Features

- **Next.js**: Utilized for building a fast and interactive web application.
- **Google Authentication**: Secure login system powered by Google.
- **MongoDB**: Robust data storage solution.
- **Prompt Sharing**: Users can share and discover AI prompts.
- **Responsive Design**: Fully responsive design ensuring a great user experience across all devices.

## View Demo

[![View Demo](https://img.shields.io/badge/View-Demo-green)](https://aiprompts-eight.vercel.app/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (which includes npm)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/eghosajoshua/AiPrompts-create-and-share-ai-prompts
   ```

2. Navigate to the project directory:

   ```sh
   cd AiPrompts
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your environment variables:

   ```sh
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
   NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your-google-client-secret
   MONGODB_URI=your-mongodb-uri
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=uxBmQIUPF0cGBA6TmnaNxRRuNsCD3gMbe2SQfqk1QQM=
   ```

### Usage

To start the development server, run:

```sh
npm run dev
```

This will open the project in your default web browser.

### Building for Production

To create a production build, run:

```sh
npm run build
npm start
```

The optimized build will be created in the `.next` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Eghosa Joshua - [eghosajohsua@gmail.com](mailto:eghosajohsua@gmail.com)

Author Portfolio: [https://www.eghosajoshua.com](https://www.eghosajoshua.com)
