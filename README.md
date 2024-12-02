# Lingua AI 


A Cutting-edge AI Platform Built with Gemini and Powered by Vercel.

[Demo Site](https://lingua.vercel.ai/)

## Features

- **Gemini AI Integration**
  - Advanced AI model for seamless and accurate text  between languages.
  - Real-time, high-performance text processing.

- **AI SDK**
  - Unified API for generating accurate s with Gemini LLMs.
  - Easy-to-use hooks for building dynamic  interfaces.
  - Flexible model provider options with Gemini integration, supporting multiple languages and  tasks.

- **Tailwind CSS & Radix UI**
  - Beautiful and responsive design with Tailwind CSS for an enhanced user experience.
  - Accessible components from Radix UI, ensuring smooth interaction for users of all abilities.

- **Data Persistence**
  - Powered by [Vercel Postgres](https://vercel.com/storage/postgres) for storing user data and  history.
  - Secure file storage with [Vercel Blob](https://vercel.com/storage/blob) for managing  documents.

- **NextAuth.js**
  - Simple and secure user authentication for personalized  services.

## Model Providers

Lingua uses **Gemini AI** as its default  model, delivering fast and reliable  services. With the [AI SDK](https://sdk.vercel.ai/docs), you can easily integrate additional model providers and customize language support.

## Deploy Your Own

You can deploy your own version of Lingua AI to Vercel.

## Running Locally

To run Lingua AI locally, you'll need the environment variables defined in the `.env.example` file. It's recommended to use Vercel's environment variable system, but a `.env` file will suffice.

1. Install Vercel CLI:
    ```bash
    npm i -g vercel
    ```
2. Link your local instance with Vercel and GitHub accounts:
    ```bash
    vercel link
    ```
3. Download your environment variables:
    ```bash
    vercel env pull
    ```

    Then install dependencies:
    ```bash
    pnpm install
    pnpm dev
    ```

Your Lingua app will be available on [localhost:3000](http://localhost:3000/).
