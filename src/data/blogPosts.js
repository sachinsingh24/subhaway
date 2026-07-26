const blogPosts = [
  {
    id: 'science-of-subconscious-mind',
    title: 'Understanding the Powers of the Subconscious Mind and SMART Goal Achievement',
    category: 'Mind Power',
    date: '2024-01-15',
    author: 'Subhash Wangde',
    excerpt:
      'All humans are equally powerful. The only difference is that some have learned how to tap into their subconscious potential while others remain unaware.',
    summary:
      'Learn how your subconscious mind processes thoughts and how Alpha State programming can rewire limiting beliefs.',
    content: `
      Historically, human beings have always survived and raised above all challenges by using more and more of their inner powers. The mind can be man's best friend or man's worst enemy. Yet, there is very little taught in schools or colleges on how to use our minds effectively.

      ### What Makes Successful People Successful?
      Successful people understand how the mind works. The mind operates on two levels:
      1. **Conscious Mind**: Deals with daily logic, reasoning, and short-term analysis.
      2. **Subconscious Mind**: Stores past conditioning, deep beliefs, involuntary habits, and controls 95% of our emotional responses and decisions.

      ### Alpha State Mind Programming
      When your brain slows down into the Alpha State (8 to 12 Hz frequency), the barrier between the conscious and subconscious mind opens up. In this state, using visualization, auto-suggestions, and SMART goal setting allows you to program goals directly into your subconscious mind.

      ### Key Takeaways:
      - **Power of Thoughts**: Thoughts create emotions, emotions dictate actions, and actions create your destiny.
      - **Overcoming Limiting Beliefs**: Identify negative childhood conditioning and re-frame them into empowering affirmations.
      - **Law of Attraction**: What you consistently focus on in your Alpha mind state is what you attract into your physical reality.
    `,
  },
  {
    id: 'student-exam-stress-management',
    title: '21st Century Student Challenges: How to Overcome Exam Stress and Peer Pressure',
    category: 'Student Empowerment',
    date: '2024-02-02',
    author: 'Subhash Wangde',
    excerpt:
      'Today parents and students face challenges that never existed before. Learn how student empowerment tools build focus, memory, and confidence.',
    summary:
      'Discover scientific memory techniques and emotional release methods to help students perform at their best under pressure.',
    content: `
      There is no better time in history than today. However, with modern opportunities come severe challenges for parents and students:
      - Nuclear family structures lacking social support systems.
      - Information overload from social media and electronic media causing distraction.
      - Intense competition and rapidly escalating costs of education.
      - Lack of concentration, focus, and clarity of career goals.

      ### The Super Student Approach
      At Shubhaway Development Academy, we believe that life and mind skills are essential to tap into infinite student potential.

      ### Proven Solutions for Students:
      1. **Goal Orientation**: Establishing clear long-term career aspirations so daily studying has purpose.
      2. **Memory & Concentration Tools**: Using mind techniques to absorb and retain complex information quickly.
      3. **Managing Exam Anxiety**: Applying relaxation techniques before entering examination halls to prevent memory blackouts.
      4. **EQ & SQ Development**: Developing emotional resilience to deal with peer pressure and gadget distractions.
    `,
  },
  {
    id: 'managing-workplace-stress-eft',
    title: 'Managing Workplace Stress Through Emotional Freedom Techniques (EFT)',
    category: 'Stress Relief',
    date: '2024-02-20',
    author: 'Subhash Wangde',
    excerpt:
      'EFT is often called "Psychological Acupuncture". Discover how tapping on energy meridian points relieves chronic stress and work pressure.',
    summary:
      'Explore how Emotional Freedom Techniques can calm stress responses and support a more balanced work life.',
    content: `
      Stress is becoming the single biggest challenge in 21st-century working life. Stress arises from both internal stressors (perfectionism, inability to say NO, workaholic tendencies) and external stressors (tight deadlines, organizational changes, economic inflation).

      ### What is EFT (Emotional Freedom Technique)?
      EFT is a non-invasive technique that combines ancient Chinese acupuncture meridians with modern psychology. Instead of using needles, you light-tap with fingertips on specific acupuncture points on the head, face, and chest while focusing on negative emotions or physical pain.

      ### Why EFT Works:
      - It sends calming signals directly to the amygdala in the brain, reducing cortisol (stress hormone) levels.
      - It releases trapped negative emotional energy caused by past failures or work fatigue.
      - It brings immediate physical relaxation and mental clarity.
    `,
  },
  {
    id: 'dmit-fingerprint-science',
    title: 'What Fingerprints Reveal About Your Child\'s Inborn Talent',
    category: 'Genetic Counselling',
    date: '2024-03-10',
    author: 'Subhash Wangde',
    excerpt:
      'Did you know that fingerprint patterns develop simultaneously with brain lobes in the womb? Discover how DMIT maps inborn talents.',
    summary:
      'A deep dive into Dermatoglyphics Multiple Intelligence Test (DMIT) and its role in talent, personality, and career mapping.',
    content: `
      Every child is born a genius with unique genetic gifts. Fingerprints and brain development happen simultaneously between the **13th to 21st week of pregnancy**. Scientists have proven a direct co-relation between fingerprint patterns and brain lobe development.

      ### The 8 Inborn Intelligences Measured by DMIT:
      1. Logical-Mathematical Intelligence
      2. Linguistic / Verbal Intelligence
      3. Spatial / Visual Intelligence
      4. Musical / Rhythmic Intelligence
      5. Bodily-Kinesthetic Intelligence
      6. Interpersonal Intelligence
      7. Intrapersonal Intelligence
      8. Naturalistic Intelligence

      ### Why DMIT Counseling is Crucial:
      - **Left-Brain vs. Right-Brain**: Discover whether your child is an analytical thinker or a creative innovator.
      - **Learning Style**: Understand whether your child learns best visually, auditorily, or through kinesthetic hands-on practice.
      - **Career Guidance**: Choose career paths aligned with genetic strengths rather than forcing them into unsuitable fields.
    `,
  },
  {
    id: 'small-steps-big-growth-habits',
    title: 'Small Steps, Big Growth: How Daily Micro Habits Create Exponential Success',
    category: 'Personal Leadership',
    date: '2024-04-05',
    author: 'Subhash Wangde',
    excerpt:
      'Key insights from Mr. Subhash Wangde\'s international best-selling book on creating consistent life and business growth.',
    summary:
      'Key lessons on how small daily actions compound into major long-term growth in life, business, and mindset.',
    content: `
      Many people fail to achieve their big dreams because they rely on sporadic bursts of motivation rather than systematic daily habits.

      ### The Power of Micro-Actions:
      In the book *"Small Steps, Big Growth"*, Subhash Wangde demonstrates that a 1% improvement every day leads to a **37x growth** over the course of a year.

      ### Daily Growth Rituals:
      - **Morning Alpha Visualization**: Spend 10 minutes visualizing your SMART goals upon waking up.
      - **Focus on High-Impact Tasks**: Eliminate minor distractions and conquer key business tasks first.
      - **Gratitude & Evening Review**: Reflect on daily wins and clear negative thoughts before sleep.
    `,
  },
];

export const formatBlogDate = (isoDate) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(isoDate));

export default blogPosts;
