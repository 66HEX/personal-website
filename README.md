# Personal Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, and GSAP. The website features smooth page transitions, interactive animations, and a responsive design.

## Features

- 🎨 Modern and minimalistic design
- ✨ Smooth page transitions and animations using GSAP
- 📱 Fully responsive layout
- 🔄 Dynamic project showcase with grid/list view
- 📝 Contact form with email handling via Resend API
- 💌 Automated email notifications with status feedback
- 🎯 Custom cursor animations
- 🎭 Interactive hover effects
- 🔍 SEO friendly

## Technologies Used

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP (with SplitText, ScrollTrigger, CustomEase plugins)
- **Smooth Scrolling:** @studio-freight/react-lenis
- **Icons:** Lucide React

## Project Structure

```
src/
├── app/
│   ├── about/        # About page components and logic
│   ├── animations/   # GSAP animation logic and configurations
│   ├── api/          # API route handlers (contact form, etc.)
│   ├── components/   # Reusable UI components
│   ├── contact/      # Contact page components and logic
│   ├── data/         # Static data and content configuration
│   ├── fonts/        # Custom font imports
│   ├── libs/         # Third-party libraries
│   └── sections/     # Reusable page sections and layouts   
│   └── works/        # Works page components and logic  
│       └── [id]/     # Dynamic routes for individual work items
```

## Key Components

- **Navbar:** Responsive navigation with mobile menu
- **AnimatedLink:** Custom animated link component
- **TransitionLink:** Page transition handler
- **SmoothScrolling:** Smooth scroll implementation
- **Footer:** Site-wide footer with social links

## Animation Features

- Page transition effects
- Text reveal animations
- Image hover effects
- Smooth scrolling
- Interactive button animations
- Status message animations
- Accordion animations

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Handling with Resend

The contact form is powered by [Resend](https://resend.com) for reliable email delivery. The implementation includes:

- Server-side email handling using API routes
- Custom email templates
- Error handling and validation
- Success/error status notifications

### Setting Up Email Handling

1. Install Resend:
```bash
npm install resend
# or
yarn add resend
```

2. Create an API route handler (`app/api/contact/route.ts`):
```typescript
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

## Required Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
RESEND_API_KEY=your_resend_api_key
```

## Deployment

The site can be deployed on platforms like Vercel or Netlify. For Vercel deployment:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure your environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Your Name - hexthecoder@gmail.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
