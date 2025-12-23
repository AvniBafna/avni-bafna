"use client";

import ArticleLayout from "@/components/ArticleLayout";

export default function EthicsNeurotechnology() {
  return (
    <ArticleLayout
      title="What Cognitive Science Has Taught Me About Building Better Products"
      date="14/03/2025"
      image="/design.jpeg"
    >
      <p>
        Studying cognitive science has influenced the way I think about product
        design and development. Beyond building features, it’s about
        understanding how humans think, decide, and interact with the world and
        creating products that align with human processes. Some of the lessons
        I’ve learnt in the past 4 years:
      </p>

      <h2 className="font-semibold text-pink-900 mt-6">Simplicity matters</h2>

      <p>
        Humans have a very limited attention span, and it is a scarce resource.
        Moreover, studies have shown that in the past couple of decades,
        attention has shrunk and in the last 5-6years, the average attention
        span is only about 47 seconds. This means that product designers need to
        be conscious about not creating cluttered designs that overwhelm users.
        Keeping interfaces clean and focusing on the core user goal helps users
        navigate products intuitively, reducing cognitive load.
      </p>

      <h2 className="font-semibold text-pink-900 mt-6">Memory shapes UX</h2>

      <p>
        Short-term memory can only approximately 7 ± 2 pieces of information at
        once. Hence it is important to keep designs simple and not overly
        complex as people can only remember a few things. In addition to this,
        using repeated patterns and grouping similar items together helps with
        memory and navigation. Humans remember things that stand out better,
        highlighting crucial information can aid retention. This means products
        should minimize the need for users to remember information across
        screens, using clear signposts and consistent design to help them stay
        oriented.
      </p>

      <h2 className="font-semibold text-pink-900 mt-6">Decision fatigue</h2>

      <p>
        Decision fatigue is when individuals experience a decrease in their
        ability to make decisions when faced with multiple choices over an
        extended period. When users are presented with too many options or
        complex decisions, it leads to mental exhaustion, poor quality, and a
        negative experience. Decision fatigue can often result in abandonment of
        tasks and impulsive choices. Guiding users with clear, limited options
        can help them feel confident and reduce friction in the user journey.
      </p>

      <h2 className="font-semibold text-pink-900 mt-6">Feedback loops</h2>

      <p>
        Humans understand their environment by interacting with it and observing
        how it responds to them. Designers use feedback loops, a process where
        the output of a system is fed back as input, creating cycles that
        influence a system's behavior. In product design, providing clear and
        immediate feedback when users take actions like a subtle animation or
        confirmation message helps users feel in control and trust the product.
      </p>

      <h2 className="font-semibold text-pink-900 mt-6">Final Thoughts</h2>

      <p>
        Cognitive science is about understanding people’s perspectives, in
        product design this translates to user research, listening to feedback,
        and iterative development to match user needs. Building better products
        isn’t just about technical skills, it’s about designing for the way
        people think and behave. Studying cognitive science has helped me
        understand the “why” behind good design practices, reminding me that the
        best products respect users’ mental processes while empowering them to
        achieve their goals with ease.
      </p>
    </ArticleLayout>
  );
}
