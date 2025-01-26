# Personal Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, and GSAP. The website features smooth page transitions, interactive animations, and a responsive design.

## Features

- 🚀 Next.js 14 with App Router and TypeScript
- 💫 GSAP powered animations and page transitions
- 📱 Fully responsive design with Tailwind CSS
- 🎯 Dynamic project showcase with detailed views
- 🎨 Modern and minimalistic UI design
- 🔍 SEO optimized structure
- 📬 Contact form with Resend API integration
- 🌟 Interactive 3D scene using Three.js
- ✨ Custom hover effects and animations
- 🎭 Glassmorphism design elements
- 🔄 Smooth scroll implementation
- 🎪 Custom component library

## Technologies Used

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP (with CustomEase plugins)
- **Smooth Scrolling:** @studio-freight/react-lenis
- **Icons:** Lucide React

## Project Structure

```
src/
├── app/                       # Main application directory
│   ├── about/                 # About page components and routes
│   ├── animations/            # GSAP animations and transitions
│   ├── api/                   # API route handlers
│   │   └── contact/           # Contact form API endpoint
│   ├── components/            # Reusable UI components
│   │   ├── Badge/             # Label components
│   │   ├── BadgeSmall/        # Compact label variant
│   │   ├── Button/            # Button component with variants
│   │   ├── ContactForm/       # Form with validation
│   │   ├── Dot/               # Dot pattern backgrounds
│   │   ├── FAQItem/           # FAQ accordion items
│   │   ├── Footer/            # Site footer
│   │   ├── GradientHeader/    # Gradient text headers
│   │   ├── HeroOverlay/       # Hero section overlay effects
│   │   ├── IconCard/          # Icon container cards
│   │   ├── IconCardSmall/     # Compact icon cards
│   │   ├── InnerCard/         # Inner content cards
│   │   ├── Marquee/           # Scrolling content
│   │   ├── Navbar/            # Navigation bar
│   │   ├── OuterCard/         # Outer container cards
│   │   ├── Scene/             # 3D scene components
│   │   │   └── Cube/          # 3D cube model
│   │   ├── ServiceCard/       # Service display cards
│   │   ├── SmoothScrolling/   # Smooth scroll wrapper
│   │   ├── TestimonialCard/   # Testimonial components
│   │   └── TransitionLink/    # Animated page transitions
│   ├── contact/               # Contact page routes
│   ├── data/                  # Static data and content
│   ├── fonts/                 # Custom font configurations
│   ├── sections/              # Main page sections
│   │   ├── FAQ/               # FAQ section
│   │   ├── Hero/              # Hero section
│   │   ├── SelectedWorks/     # Featured works
│   │   ├── Services/          # Services section
│   │   └── Testimonials/      # Testimonials section
│   ├── utils/                 # Utility functions
│   │   ├── horizontalLoop.js  # GSAP horizontal scroll animation
│   │   ├── spotlight.tsx      # Mouse-following spotlight effect
│   │   └── utils.ts           # Common utility functions
│   └── works/                 # Works page components
│       └── [id]/              # Dynamic work detail routes
├── node_modules/              # Project dependencies
└── public/                    # Static assets
    ├── environments/          # Environment maps
    ├── images/                # Image assets
    │   └── works/             # Project images
    └── logo/                  # Logo assets
```

## Animation Features

- Interactive 3D scene with Three.js
- Page transition effects
- Mouse following spotlight effect
- Smooth scrolling
- Interactive button animations
- Status message animations
- Accordion animations

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/66HEX/personal-website.git
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

Project Link: [https://github.com/66HEX/personal-website](https://github.com/66HEX/personal-website)
