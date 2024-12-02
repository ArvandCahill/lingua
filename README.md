# Lingua AI Translation

[![Lingua AI Translation](app/(chat)/opengraph-image.png)](https://lingua.vercel.ai/)

A Cutting-edge AI Translation Platform Built with Gemini and Powered by Vercel.

[Demo Site](https://lingua.vercel.ai/)

## Features

- **Gemini AI Integration**
  - Advanced AI model for seamless and accurate text translation between languages.
  - Real-time, high-performance text processing.

- **AI SDK**
  - Unified API for generating accurate translations with Gemini LLMs.
  - Easy-to-use hooks for building dynamic translation interfaces.
  - Flexible model provider options with Gemini integration, supporting multiple languages and translation tasks.

- **Tailwind CSS & Radix UI**
  - Beautiful and responsive design with Tailwind CSS for an enhanced user experience.
  - Accessible components from Radix UI, ensuring smooth interaction for users of all abilities.

- **Data Persistence**
  - Powered by [Vercel Postgres](https://vercel.com/storage/postgres) for storing user data and translation history.
  - Secure file storage with [Vercel Blob](https://vercel.com/storage/blob) for managing translation documents.

- **NextAuth.js**
  - Simple and secure user authentication for personalized translation services.

## Model Providers

Lingua uses **Gemini AI** as its default translation model, delivering fast and reliable translation services. With the [AI SDK](https://sdk.vercel.ai/docs), you can easily integrate additional model providers and customize language support.

## Deploy Your Own

You can deploy your own version of Lingua AI to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Flingua-ai&env=AUTH_SECRET,GEMINI_API_KEY&envDescription=Learn%20more%20about%20how%20to%20get%20the%20API%20Keys&envLink=https%3A%2F%2Fgithub.com%2Fvercel%2Flingua-ai%2Fblob%2Fmain%2F.env.example&demo-title=Lingua%20AI%20Translation&demo-description=An%20Open-Source%20AI%20Translation%20Platform%20Built%20With%20Gemini%20and%20Vercel.&demo-url=https%3A%2F%2Flingua.vercel.ai&stores=[{%22type%22:%22postgres%22},{%22type%22:%22blob%22}])

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
