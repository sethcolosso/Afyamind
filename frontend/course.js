/* ============================================================
   AfyaMind — Course Engine
   "Understanding & Managing Anxiety and Stress"
   Vanilla JS, no build step. Progress + tool data persist in
   localStorage under namespaced keys so multiple courses can
   coexist later.
   ============================================================ */

const COURSE_ID = 'anxiety-stress-v1';
const LS = {
  progress: `afyamind:${COURSE_ID}:progress`,
  triggerLog: `afyamind:${COURSE_ID}:triggerLog`,
  thoughtLog: `afyamind:${COURSE_ID}:thoughtLog`,
  plan: `afyamind:${COURSE_ID}:plan`,
  reflections: `afyamind:${COURSE_ID}:reflections`,
  lastLesson: `afyamind:${COURSE_ID}:lastLesson`,
};

/* ---------------- Course content ---------------- */
const COURSE = {
  title: 'Understanding & Managing Anxiety and Stress',
  audience: 'General Adults',
  format: 'Self-paced modules',
  duration: '45–60 min total',
  modules: [
    {
      id: 'm1',
      icon: '🌱',
      title: "What's Actually Happening?",
      subtitle: 'Psychoeducation',
      tagline: "Anxiety isn't your enemy — it's a signal. Let's learn what it's trying to tell you.",
      lessons: [
        {
          id: 'l1-1', title: 'What is Anxiety vs. Stress?', time: '4 min',
          body: `
            <p>You've probably used the words <strong>anxiety</strong> and <strong>stress</strong> interchangeably. Most people do. But they're actually two different experiences — and understanding the difference is the first step to dealing with them more effectively.</p>
            <p><strong>Stress</strong> is usually a response to something external. A deadline. A difficult conversation. A bill you weren't expecting. It tends to show up when demands feel bigger than your current resources. When the stressor goes away, the stress usually eases too.</p>
            <p><strong>Anxiety</strong> is different. It's more internal. It can show up even when nothing is technically wrong — when life looks fine on the outside but something inside feels unsettled, tense, or on edge. Anxiety is often about anticipation — the what ifs, the worst-case scenarios, the feeling that something bad is coming even when you can't name it.</p>
            <p><strong>Here's the most important thing to understand early:</strong> both anxiety and stress are completely normal human experiences. They are not signs of weakness. They are not signs that something is broken in you.</p>
            <p>Your brain developed these responses over thousands of years to keep you alive. When early humans faced real physical danger, anxiety and stress triggered a survival system — speeding up the heart, sharpening focus, flooding the body with energy to fight or flee. That system saved lives.</p>
            <p>The problem today is that your brain can't always tell the difference between a predator and a work email. It fires the same alarm for both.</p>
            <p>So when anxiety shows up, it's not betraying you. It's trying to protect you. Your job — and what this course will help you do — is learn how to work with that system instead of being controlled by it.</p>`,
          takeaway: 'Stress responds to external pressure. Anxiety lives in anticipation and internal experience. Both are normal. Both are manageable.'
        },
        {
          id: 'l1-2', title: 'What Happens in Your Body', time: '4 min',
          body: `
            <p>Have you ever noticed your heart racing before a big presentation? Your stomach tightening before a difficult conversation? Your mind going blank at the worst possible moment? That's not a coincidence — that's your body doing exactly what it was designed to do.</p>
            <p>When your brain perceives a threat — real or imagined — it sends an immediate distress signal to a small, almond-shaped part of your brain called the <strong>amygdala</strong>. The amygdala doesn't think. It reacts. And its reaction triggers a cascade of physical changes almost instantly.</p>
            <p><strong>Here's what happens in those first few seconds:</strong></p>
            <ul>
              <li>Your heart rate increases — pumping more blood to your muscles so you can move fast</li>
              <li>Your breathing quickens — bringing in more oxygen to fuel that movement</li>
              <li>Your muscles tighten — especially in your shoulders, chest, and jaw</li>
              <li>Your digestion slows down — energy is redirected away from non-essential functions</li>
              <li>Your mind narrows its focus — which can feel like racing thoughts or an inability to concentrate</li>
              <li>Your palms may sweat — an ancient mechanism to improve grip</li>
            </ul>
            <p>This is your fight-or-flight response, and it's extraordinarily powerful. In a true emergency, it can save your life. The challenge is that it can also be triggered by things that aren't life-threatening at all — a social situation, a looming deadline, a memory, even a thought.</p>
            <p>Here's something that surprises many people: the physical sensations of anxiety can themselves become frightening, which causes more anxiety, which causes more physical symptoms. This is how panic can escalate quickly.</p>
            <p>Understanding this cycle is powerful because it gives you a place to intervene. You can't always control the trigger. But you can learn to calm your body's response — and that's exactly what we'll build toward in this course.</p>`,
          takeaway: "Anxiety is a full-body experience driven by your brain's threat-detection system. The physical symptoms are real, not imagined — and they can be calmed."
        },
        {
          id: 'l1-3', title: 'The Anxiety Cycle', time: '5 min',
          body: `
            <p>One of the most frustrating things about anxiety is that the natural ways we try to escape it often make it worse in the long run. Understanding why this happens changes everything.</p>
            <p style="text-align:center;font-weight:700;color:var(--c-primary);margin:20px 0;">Trigger → Anxious thought → Physical response → Avoidance → Temporary relief → Anxiety grows stronger</p>
            <p>Imagine you have a presentation at work coming up. The thought arrives: "What if I mess up and everyone judges me?" Your body tenses. Your heart rate picks up. The discomfort is real and unpleasant.</p>
            <p>So you do what feels logical — you avoid thinking about it, distract yourself, delay preparation. You get temporary relief from the sharpest edge of the anxiety.</p>
            <p>But underneath: your brain has just learned that this situation is dangerous enough to escape. Each time you avoid it, that message gets reinforced. The anxiety gets a little more permission to grow. This is called the <strong>anxiety cycle</strong>, and it's not a character flaw — it's a learning pattern. Your brain is doing what brains do: learning from experience. The problem is it's learning the wrong lesson.</p>
            <p><strong>The three most common ways people feed the cycle without realizing it:</strong></p>
            <ul>
              <li><strong>Avoidance</strong> — staying away from situations, people, or thoughts that trigger anxiety. Feels like relief, functions like fuel.</li>
              <li><strong>Reassurance seeking</strong> — constantly asking others "do you think it'll be okay?" The comfort lasts minutes. The need for it grows.</li>
              <li><strong>Overthinking</strong> — mentally running through every possible scenario as a way of feeling in control. It feels productive. It rarely is.</li>
            </ul>
            <p>None of these make you weak or broken. They make you human. But recognizing them in yourself is the first real act of change. The good news: because anxiety is a learned cycle, it can also be unlearned — not overnight, but steadily, with the right tools.</p>`,
          takeaway: 'Anxiety grows through avoidance and safety behaviors. Recognizing your personal cycle is the beginning of breaking it.'
        }
      ],
      capstone: { type: 'reflection', id: 'm1-reflect', title: 'Module 1 Reflection', prompts: [
        'When you think about anxiety or stress in your own life, which feels more familiar — external pressure (stress) or internal unease (anxiety)?',
        'Which physical symptoms from Lesson 1.2 do you recognize in yourself? Where does anxiety live in your body?',
        'Can you think of a situation where you avoided something because it made you anxious? What happened after?'
      ], note: "You don't have to have this all figured out. Noticing is enough for now." }
    },
    {
      id: 'm2',
      icon: '🔍',
      title: 'Recognizing Your Patterns',
      subtitle: 'Self-awareness',
      tagline: "You can't change what you can't see. This module helps you see clearly.",
      lessons: [
        {
          id: 'l2-1', title: 'Common Triggers & How to Spot Yours', time: '4 min',
          body: `
            <p>A trigger is anything — a situation, a person, a thought, a memory, even a smell — that activates your anxiety response. Triggers aren't the cause of anxiety itself, but they are the doorway through which it enters.</p>
            <p>Learning to spot your triggers is one of the most empowering things you can do because it turns anxiety from something that happens to you into something you can anticipate and prepare for.</p>
            <p><strong>Situational:</strong> public speaking, conflict, new environments, medical appointments, financial pressure.</p>
            <p><strong>Relational:</strong> feeling rejected or criticized, unstable relationships, difficulty saying no, feeling unseen.</p>
            <p><strong>Internal:</strong> physical sensations like a racing heart, memories of past difficulty, uncertainty about the future, feeling out of control.</p>
            <p><strong>Environmental:</strong> loud or chaotic spaces, too much screen time or news, poor sleep, caffeine or alcohol.</p>
            <p>The same situation can be triggering for one person and neutral for another — triggers are personal, shaped by your history and nervous system.</p>
            <p><strong>To start spotting yours:</strong> pay attention to the moments just before anxiety spikes. Where was I? Who was I with? What was I thinking about? What had just happened? Just notice — patterns will emerge over time.</p>`,
          takeaway: 'Triggers are personal and learnable. Identifying yours turns anxiety from something mysterious into something you can work with.'
        },
        {
          id: 'l2-2', title: 'Physical, Emotional & Behavioral Symptoms', time: '5 min',
          body: `
            <p>Anxiety doesn't announce itself the same way for everyone. For some it screams through the body; for others it's a quieter, persistent hum of dread. Anxiety expresses itself across three dimensions:</p>
            <p><strong>Physical:</strong> racing heart, shortness of breath, chest tightness, muscle tension, headaches, upset stomach, sweating or shaking, fatigue, disrupted sleep.</p>
            <p><strong>Emotional:</strong> persistent worry, a sense of dread, feeling overwhelmed, irritability, feeling detached, a general unease, difficulty feeling joy even when things are fine.</p>
            <p><strong>Behavioral:</strong> avoiding people or places, procrastinating, overworking to avoid discomfort, seeking reassurance, withdrawing socially, checking behaviors, difficulty deciding.</p>
            <p>Many people only recognize their anxiety through one channel — usually the most obvious one — and miss the others. Anxiety is a whole-system experience; the more dimensions you can recognize, the earlier you catch it.</p>`,
          takeaway: 'Anxiety shows up physically, emotionally, and behaviorally. Knowing all three channels helps you recognize it sooner and respond smarter.'
        },
        {
          id: 'l2-3', title: 'Anxiety Styles', time: '5 min',
          body: `
            <p>Beyond symptoms, most people develop a dominant <strong>style</strong> of anxiety — a characteristic way it expresses and protects itself. These styles often start as smart adaptations to difficult environments, but over time can become the very thing keeping anxiety alive.</p>
            <p><strong>The Avoider</strong> — manages anxiety by steering clear of anything that might trigger it. Relief is immediate, but life gradually shrinks. Signs: a growing list of things you "can't" do or conversations you keep putting off.</p>
            <p><strong>The Overthinker</strong> — manages anxiety through mental control, trying to think through every scenario to feel prepared. Thinking about an uncertain future doesn't make it more certain — it just generates more thoughts. Signs: difficulty switching off at night, replaying conversations, needing to "figure everything out."</p>
            <p><strong>The People-Pleaser</strong> — manages anxiety through connection and approval, saying yes when they mean no. Looks like kindness from the outside; is exhausting internally. Signs: difficulty saying no, feeling responsible for others' emotions, quiet resentment.</p>
            <p>These styles aren't personality flaws — they were often the wisest response available to you at some point. Recognizing yours isn't about blame. It's about understanding the pattern well enough to start making different choices.</p>`,
          takeaway: 'Most people have a dominant anxiety style — Avoider, Overthinker, or People-Pleaser. Recognizing yours is a major step toward changing it.'
        }
      ],
      capstone: { type: 'triggerlog', id: 'm2-triggerlog', title: 'Trigger Tracking Worksheet',
        note: "Use this over the next few days. The goal isn't to eliminate anxiety — it's to understand it better. Even two or three entries will start revealing patterns." }
    },
    {
      id: 'm3',
      icon: '🌬️',
      title: 'In-the-Moment Tools',
      subtitle: 'Quick relief skills',
      tagline: 'When anxiety peaks, you need tools that work fast. These do.',
      lessons: [
        {
          id: 'l3-1', title: 'Breathing Techniques', time: '4 min',
          body: `
            <p>When anxiety spikes, your breathing is one of the fastest pathways back to calm — and it's always available to you. No equipment, no privacy required.</p>
            <p>Your breathing is one of the few bodily functions that operates both automatically and under your conscious control. When you deliberately slow and deepen your breath, you activate your <strong>parasympathetic nervous system</strong> — the part responsible for rest and recovery — directly counteracting fight-or-flight.</p>
            <p><strong>Box Breathing</strong> is used by everyone from Navy SEALs to surgeons. Inhale 4 · hold 4 · exhale 4 · hold 4, repeated 4–6 times. Best before a stressful event — a presentation, a difficult conversation.</p>
            <p><strong>4-7-8 Breathing</strong> uses an extended exhale — the longer out-breath activates the vagus nerve. Inhale 4 · hold 7 · exhale 8 (a gentle whoosh), for 3–4 cycles. Best when anxiety has already escalated or when a racing mind is keeping you up.</p>
            <p>Neither will feel natural the first time — that's normal. Practice outside of anxious moments so the response becomes automatic when you need it. Try the tool below.</p>
            <div id="tool-breathing" class="tool-mount"></div>`,
          takeaway: 'Controlled breathing directly calms your nervous system. Box breathing and 4-7-8 are two reliable techniques you can use anywhere, anytime.'
        },
        {
          id: 'l3-2', title: 'Grounding: 5-4-3-2-1', time: '4 min',
          body: `
            <p>Anxiety pulls you out of the present moment, into the what-ifs and worst cases. Grounding does the opposite — it anchors you in the here and now, using your five senses as the rope.</p>
            <p><strong>5</strong> things you can SEE — be specific. <strong>4</strong> things you can TOUCH. <strong>3</strong> things you can HEAR. <strong>2</strong> things you can SMELL. <strong>1</strong> thing you can TASTE.</p>
            <p>Your five senses are anchored in the present — they cannot perceive the future, only what's happening right now. Most people find that by the time they finish all five steps, the intensity of the anxiety has noticeably reduced.</p>
            <p>If anxiety is very high, start with just one sense — pick up an object and describe it in detail. This micro-grounding can break the spiral in under a minute. Try the guided version below.</p>
            <div id="tool-grounding" class="tool-mount"></div>`,
          takeaway: 'The 5-4-3-2-1 method uses your senses to bring you back to the present, interrupting anxious focus on imagined future threats.'
        },
        {
          id: 'l3-3', title: 'Body Scan', time: '4 min',
          body: `
            <p>Anxiety doesn't just live in your mind — it stores itself in your body. Tight shoulders, a clenched jaw, a chest that never quite opens. Most people carry chronic tension without realizing it, because it's become their baseline.</p>
            <p>A body scan systematically brings your awareness through your body from head to toe, noticing where tension is held and consciously releasing it. It's not complicated and doesn't require special skill — but done regularly, it dramatically reduces the physical burden anxiety places on your body.</p>
            <p>Find a comfortable position, take a few slow breaths, then move attention downward: head and scalp → forehead and eyes → jaw and mouth → neck and shoulders → chest → arms and hands → stomach and core → lower back and hips → legs and feet. At each stop, notice tension, breathe, and let it soften.</p>
            <p>Even 5 minutes once a day builds significant awareness over time — and it's a powerful tool right before sleep. Try the guided walkthrough below.</p>
            <div id="tool-bodyscan" class="tool-mount"></div>`,
          takeaway: 'Tension stored in the body is a physical form of anxiety. A body scan helps you locate and release it — turning awareness itself into relief.'
        }
      ],
      capstone: { type: 'guidedsession', id: 'm3-session', title: 'The 5-Minute Anxiety Reset',
        note: 'A guided session combining breathing, grounding, and body scan into one seamless experience. Use it whenever anxiety rises, or as a daily reset.',
        steps: [
          { label: 'Arrive', seconds: 10, text: 'Find a comfortable position wherever you are right now. You don\u2019t need to change anything about your environment. Just allow yourself to arrive here, in this moment. Close your eyes gently if that feels comfortable, or soften your gaze toward the floor.' },
          { label: 'Breathe · in', seconds: 4, text: 'Breathe in through your nose... two... three... four.' },
          { label: 'Breathe · hold', seconds: 4, text: 'Hold... two... three... four.' },
          { label: 'Breathe · out', seconds: 4, text: 'Breathe out through your mouth... two... three... four.' },
          { label: 'Breathe · hold', seconds: 4, text: 'Hold... two... three... four.' },
          { label: 'Breathe · in', seconds: 4, text: 'Again. Breathe in... two... three... four.' },
          { label: 'Breathe · hold', seconds: 4, text: 'Hold... two... three... four.' },
          { label: 'Breathe · out', seconds: 4, text: 'Breathe out... two... three... four.' },
          { label: 'Breathe · hold', seconds: 4, text: 'Hold... two... three... four. Good. Notice your shoulders have probably dropped just slightly. Your heart rate is beginning to ease.' },
          { label: 'See', seconds: 10, text: 'Without moving, notice five things you can see. Take your time with each one — color, shape, light.' },
          { label: 'Touch', seconds: 8, text: 'Now four things you can physically feel right now. The weight of your body. The temperature of the air. The texture beneath your hands.' },
          { label: 'Hear', seconds: 8, text: 'Three things you can hear. Near sounds. Distant sounds. Sounds you normally filter out.' },
          { label: 'Smell', seconds: 6, text: 'Two things you can smell. Take a slow breath in through your nose.' },
          { label: 'Taste', seconds: 4, text: 'One thing you can taste right now. You are here. Present. Safe in this moment.' },
          { label: 'Release · head & jaw', seconds: 8, text: 'Bring your attention to the top of your head. Let any tightness soften with your next breath out. Move to your jaw — unclench gently, let your tongue drop from the roof of your mouth.' },
          { label: 'Release · shoulders', seconds: 6, text: 'Your shoulders. Let them fall. Let them be heavy.' },
          { label: 'Release · chest', seconds: 8, text: 'Your chest. Take one deep breath all the way in... and let it go completely.' },
          { label: 'Release · hands', seconds: 6, text: 'Your hands. Open them. Release any grip.' },
          { label: 'Release · stomach', seconds: 6, text: 'Your stomach. Breathe into it gently. Let it soften.' },
          { label: 'Release · legs', seconds: 6, text: 'Your legs and feet. Heavy. Grounded. Supported.' },
          { label: 'Close', seconds: 10, text: 'Take one more full breath in through your nose... and release it slowly through your mouth. When you\u2019re ready, gently open your eyes. Whatever was sitting on your chest when you started — it may still be there. But you are not at the mercy of it. You have tools. And you just used them.' }
        ] }
    },
    {
      id: 'm4',
      icon: '🧩',
      title: 'Changing the Thinking',
      subtitle: 'Cognitive tools',
      tagline: "Your thoughts feel like facts. Often, they're just first drafts.",
      lessons: [
        {
          id: 'l4-1', title: 'Anxious Thought vs. Realistic Thought', time: '4 min',
          body: `
            <p>Just because a thought feels true doesn't mean it is true. Anxious thoughts arrive fast, feel urgent, and present themselves as absolute fact rather than one possible interpretation among many.</p>
            <p><strong>Anxious thoughts usually:</strong> focus on worst-case scenarios, treat possibilities as certainties, use absolutes like always/never/everyone, skip to the most extreme conclusion, and demand immediate emotional reaction.</p>
            <p><strong>Realistic thoughts usually:</strong> consider a range of outcomes, account for actual evidence, allow for uncertainty, and leave room for nuance — "this is hard" rather than "this is impossible."</p>
            <p><strong>Example:</strong> a friend doesn't reply for hours. <em>Anxious:</em> "They're ignoring me, they're upset with me." <em>Realistic:</em> "They haven't replied yet — people get busy. There are lots of reasons, most having nothing to do with me."</p>
            <p>This isn't about telling yourself anxious thoughts are "wrong," or forcing positivity. It's about noticing when a thought jumped from possible to certain without evidence, and gently widening the lens back out.</p>`,
          takeaway: "Anxious thoughts often present themselves as facts when they're really just one possibility among many."
        },
        {
          id: 'l4-2', title: 'Common Thinking Traps', time: '5 min',
          body: `
            <p>Anxious minds fall into recognizable patterns — mental shortcuts that feel automatic but distort how we see situations. They're called "traps" because they're easy to fall into and hard to notice from the inside.</p>
            <ol>
              <li><strong>Catastrophizing</strong> — jumping to the worst outcome and treating it as most likely. "My boss wants to talk tomorrow — I'm probably getting fired."</li>
              <li><strong>All-or-Nothing Thinking</strong> — no middle ground. "I made one mistake, so the whole thing was a disaster."</li>
              <li><strong>Mind Reading</strong> — assuming you know what someone else is thinking, usually negatively, without evidence.</li>
              <li><strong>Fortune Telling</strong> — predicting the future with certainty, almost always negatively.</li>
              <li><strong>Should Statements</strong> — rigid standards using should/must/have to, adding guilt on top of the original feeling.</li>
              <li><strong>Emotional Reasoning</strong> — "I feel like a failure, so I must be one."</li>
              <li><strong>Filtering</strong> — focusing only on the negative detail while ignoring everything positive.</li>
            </ol>
            <p>You don't need to memorize these terms. What matters is starting to notice: "Oh — that's catastrophizing." Naming the pattern creates a small but important gap between you and the thought.</p>`,
          takeaway: 'Anxious minds fall into predictable thinking traps. Naming them is the first step to loosening their grip.'
        },
        {
          id: 'l4-3', title: 'How to Reframe Anxious Thoughts', time: '5 min',
          body: `
            <p>Once you recognize an anxious thought and the trap behind it, the next step is <strong>cognitive reframing</strong>: notice the thought, examine the evidence, and consider a more balanced perspective.</p>
            <p><strong>1. Catch the thought</strong> — notice it, and ideally write it down. Putting it into words moves it from the swirling abstract space of your mind into something concrete.</p>
            <p><strong>2. Identify the thinking trap</strong> — which pattern does this resemble? Naming it creates distance.</p>
            <p><strong>3. Examine the evidence</strong> — What evidence do I actually have? Is there another explanation that fits just as well? What would I tell a friend with this exact thought? What actually happened last time?</p>
            <p><strong>4. Build a balanced thought</strong> — not the opposite of the anxious thought, but a more complete version. "I don't actually know how they felt. Even if they were a little annoyed, that's not the end of the world."</p>
            <p>This process can feel slow and mechanical at first — that's normal. Over time it starts to happen more naturally. You're not trying to eliminate anxious thoughts entirely; you're building a habit of checking in with them. Try the tool below.</p>
            <div id="tool-thoughtrecord-hint" class="hint-box">Head to the Module 4 exercise below to work through a real thought using this exact process.</div>`,
          takeaway: "Reframing isn't about thinking positive — it's about thinking completely."
        }
      ],
      capstone: { type: 'thoughtrecord', id: 'm4-thoughtrecord', title: 'Thought Record',
        note: "Use this whenever you notice a strong anxious thought. The goal isn't to get the intensity to zero — even a small shift is meaningful progress." }
    },
    {
      id: 'm5',
      icon: '🌤️',
      title: 'Building Long-Term Resilience',
      subtitle: 'Lifestyle & habits',
      tagline: 'Managing anxiety in the moment is essential. Making it less likely to spike in the first place is the goal.',
      lessons: [
        {
          id: 'l5-1', title: 'Sleep, Movement & Nutrition', time: '5 min',
          body: `
            <p>Anxiety is not purely psychological — it's deeply biological. Three of the most powerful, most underestimated influences on your anxiety levels: how you sleep, how you move, and how you eat.</p>
            <p><strong>Sleep</strong> — anxiety and sleep have a two-directional relationship: anxiety disrupts sleep, and poor sleep worsens anxiety. When sleep-deprived, your amygdala becomes significantly more reactive — even one poor night can increase emotional reactivity by up to 60%. Meanwhile your prefrontal cortex, responsible for rational thinking, becomes less active. Consistent sleep/wake times and a wind-down routine are direct anxiety interventions, not luxuries.</p>
            <p><strong>Movement</strong> — exercise is one of the most effective anxiety interventions that exists, comparable in some studies to medication for mild-to-moderate anxiety. It burns off excess adrenaline and cortisol and triggers endorphins, serotonin, and BDNF. Even a 20–30 minute walk produces measurable reduction — consistency matters more than intensity.</p>
            <p><strong>Nutrition</strong> — caffeine, alcohol, high sugar, and skipped meals tend to worsen anxiety. Regular balanced meals, omega-3 rich foods, magnesium (leafy greens, nuts, seeds, dark chocolate), and good hydration support a calmer nervous system.</p>`,
          takeaway: 'Sleep, movement, and nutrition are the biological foundation your mental health rests on. Improving any one directly lowers your anxiety baseline.'
        },
        {
          id: 'l5-2', title: 'Building a Daily Routine', time: '5 min',
          body: `
            <p>The tools in this course only work if they get used — and they only get used consistently if they're built into a routine attached to existing anchors: waking up and going to sleep.</p>
            <p><strong>Morning routine ideas:</strong> delay your phone by even 10 minutes, 2–3 minutes of box breathing, light exposure (open curtains / step outside), a 60-second grounding moment before the day pulls you in.</p>
            <p><strong>Evening routine ideas:</strong> a 45–60 minute screen-free wind-down window before sleep, 2–3 minutes noting three things that went well today, a body scan or progressive muscle relaxation, writing tomorrow's worries down to get them out of active mental processing.</p>
            <p>Start small — choose one morning practice and one evening practice, and do those consistently for two weeks before adding anything else. The goal isn't a perfect routine. It's a consistent one.</p>`,
          takeaway: 'Two or three intentional practices in the morning and evening — done consistently — build a significantly more resilient nervous system over time.'
        },
        {
          id: 'l5-3', title: 'Setting Boundaries', time: '5 min',
          body: `
            <p>Every day you have a finite amount of mental and emotional energy, and anxiety is one of its heaviest consumers. A boundary isn't a wall or a rejection — it's a decision about what you will and won't give your energy to, communicated clearly.</p>
            <p>If you recognized yourself as a People-Pleaser in Module 2, boundaries can feel especially threatening, because they involve disappointing someone, uncertainty about their reaction, and conflict — all things an anxious mind reads as danger.</p>
            <p><strong>Worth examining:</strong> time boundaries (commitments that leave no room to rest), emotional boundaries (carrying others' feelings that aren't yours to carry), information boundaries (news and social media that keep your threat system activated).</p>
            <p><strong>How to actually set one:</strong> name what you need clearly to yourself first, state it simply without an extensive explanation ("I can't take that on right now" is complete), expect discomfort, and hold it. Start with low-stakes situations to build the muscle.</p>
            <p>Every time you say no to something that drains you, you are saying yes to something that restores you.</p>`,
          takeaway: 'Boundaries protect the mental and emotional energy anxiety continuously depletes — learning to set them, even imperfectly, is one of the most practical long-term skills available.'
        }
      ],
      capstone: { type: 'plan', id: 'm5-plan', title: 'My Personal Anxiety Management Plan',
        note: "There are no right answers here — only honest ones. Pick the one change that feels most important right now and begin there." }
    },
    {
      id: 'm6',
      icon: '🤝',
      title: 'When to Seek More Help',
      subtitle: 'Safety & guidance',
      tagline: "This course is a powerful starting point. For some people, it's also a doorway to something more.",
      lessons: [
        {
          id: 'l6-1', title: 'Signs You Need Professional Attention', time: '4 min',
          body: `
            <p>Everything so far has been self-help tools. For many people they make a lasting difference — but self-help has limits, and recognizing when those limits are reached matters.</p>
            <p>Seeking professional help is not a sign you've failed. It's a sign you're taking your mental health as seriously as a physical health concern.</p>
            <p><strong>Signs it's time to speak to a professional:</strong></p>
            <ul>
              <li>It's significantly affecting your work, relationships, self-care, or daily tasks</li>
              <li>You're avoiding more and more of your life, and your world is quietly shrinking</li>
              <li>Persistent physical symptoms that medical tests can't fully explain</li>
              <li>You've genuinely engaged with self-help tools and found minimal relief</li>
              <li>You're using alcohol, cannabis, or other substances to cope</li>
              <li>You're experiencing panic attacks</li>
              <li>You're having thoughts of harming yourself — please reach out immediately; this is a mental health emergency</li>
            </ul>
            <p>A simple question worth asking yourself: <em>"Is my anxiety costing me a life I want to be living?"</em> If the honest answer is yes — even partly — that's reason enough to seek support.</p>
            <div class="crisis-note">If you are in immediate danger or crisis, please use the resources at the end of this module or contact emergency services in your country — you do not need to manage this alone.</div>`,
          takeaway: 'Professional help is appropriate whenever anxiety significantly impacts your quality of life, functioning, or safety. Recognizing that moment is a form of courage.'
        },
        {
          id: 'l6-2', title: 'Types of Support Available', time: '5 min',
          body: `
            <p><strong>Therapy</strong> — one-on-one work with a trained professional. Approaches include <strong>CBT</strong> (identifying and changing thought/behavior patterns — building on Modules 2 & 4), <strong>ACT</strong> (changing your relationship with anxious thoughts rather than eliminating them), <strong>Exposure Therapy</strong> (gradually facing feared situations in a supported way), and <strong>EMDR</strong> (effective when anxiety has roots in past trauma).</p>
            <p><strong>Psychiatry & Medication</strong> — a psychiatrist can diagnose and prescribe medication when appropriate (e.g. SSRIs, SNRIs). Not the right choice for everyone, and never self-prescribed — but for many, it's the difference between functioning and not.</p>
            <p><strong>Group Therapy & Support Groups</strong> — working alongside others with similar experiences, often deeply normalizing; peer-run groups are often free.</p>
            <p><strong>Digital & Remote Support</strong> — teletherapy has expanded access significantly; apps and courses like this one are useful complements between sessions.</p>
            <p><strong>Crisis Support</strong> — for acute distress, staffed by trained professionals, available any hour. Listed at the end of this module.</p>`,
          takeaway: 'Support exists across a broad spectrum. Most people benefit from a combination of approaches rather than one solution alone.'
        },
        {
          id: 'l6-3', title: "Talking to Someone About It", time: '4 min',
          body: `
            <p>For many people the hardest part isn't finding the right therapist — it's saying the words out loud for the first time. Anxiety generates every reason not to: What if they don't understand? What if it's not "bad enough"?</p>
            <p>These are thoughts, not facts.</p>
            <p><strong>Talking to a friend or family member:</strong> you don't need to explain everything at once. A simple opening is enough — try one from the toolbox below. It's okay to say what you need: advice, or simply to be heard.</p>
            <p><strong>Talking to a doctor:</strong> your GP is an appropriate first point of contact. They can assess, rule out physical contributors, and refer you onward. You don't need to minimize it to make it easier for them.</p>
            <p><strong>Talking to a therapist:</strong> most offer an initial consultation. It's completely appropriate to ask what approach they use and how you'll know if it's working. Finding the right fit can take a couple of tries — that's normal.</p>
            <p>If you're not ready yet, that's okay too — being in this course is already the beginning of change.</p>
            <div id="tool-openers" class="tool-mount"></div>`,
          takeaway: "Asking for help is a skill, not a personality trait. It gets easier with practice — and the first conversation, however imperfect, is the most important one."
        }
      ],
      capstone: { type: 'resources', id: 'm6-resources', title: 'Resource List' }
    }
  ]
};

const RESOURCES = {
  crisis: [
    { name: 'International Association for Suicide Prevention', detail: '24/7 · crisis centers by country', href: 'https://www.iasp.info/resources/Crisis_Centres/' },
    { name: 'Crisis Text Line (US, UK, Canada, Ireland)', detail: '24/7 · Text HOME to 741741', href: null },
    { name: 'Samaritans (UK & Ireland)', detail: '24/7 · 116 123', href: 'tel:116123' },
    { name: 'Lifeline (Australia)', detail: '24/7 · 13 11 14', href: 'tel:131114' },
    { name: '988 Suicide & Crisis Lifeline (US)', detail: '24/7 · Call or text 988', href: 'tel:988' },
  ],
  therapy: [
    { name: 'Psychology Today Therapist Finder', detail: 'Search by location, specialty, insurance, budget', href: 'https://www.psychologytoday.com' },
    { name: 'BetterHelp', detail: 'Online therapy, matched remotely', href: 'https://www.betterhelp.com' },
    { name: 'Open Path Collective', detail: 'Reduced-cost therapy for financial constraints', href: 'https://openpathcollective.org' },
    { name: 'Your GP / Primary Care Doctor', detail: 'Can refer you to local mental health services', href: null },
  ],
  community: [
    { name: 'Anxiety and Depression Association of America (ADAA)', detail: 'Information, peer support groups, therapist finder', href: 'https://adaa.org' },
    { name: 'Mind (UK)', detail: 'Mental health information, local support groups', href: 'https://www.mind.org.uk' },
    { name: 'Beyond Blue (Australia)', detail: 'Anxiety and depression support, forums, helpline', href: 'https://www.beyondblue.org.au' },
    { name: 'r/Anxiety', detail: 'Peer community — not professional support, but often normalizing', href: 'https://www.reddit.com/r/Anxiety/' },
  ]
};

const OPENERS = {
  friend: [
    "I've been struggling with anxiety lately and I wanted to tell someone I trust.",
    "Things have felt really overwhelming recently and I think I need some support.",
    "I've been going through something difficult and I'd like to talk about it if you're open to listening."
  ],
  doctor: [
    "I've been experiencing persistent anxiety that's affecting my daily life and I'd like to talk about options for support.",
    "I've been struggling with my mental health and I think I need some professional help."
  ],
  therapist: [
    "What approach do you use for anxiety?",
    "How do you typically structure sessions?",
    "How will we know if the therapy is working?"
  ]
};

const THINKING_TRAPS = ['Catastrophizing', 'All-or-Nothing Thinking', 'Mind Reading', 'Fortune Telling', 'Should Statements', 'Emotional Reasoning', 'Filtering', 'Not sure yet'];
const ANXIETY_STYLES = ['Avoider', 'Overthinker', 'People-Pleaser', 'Mix / not sure'];

/* ---------------- Progress store ---------------- */
const Progress = {
  get() {
    try { return JSON.parse(localStorage.getItem(LS.progress)) || {}; }
    catch { return {}; }
  },
  isDone(id) { return !!this.get()[id]; },
  toggle(id, val) {
    const p = this.get();
    if (val === undefined) val = !p[id];
    p[id] = val;
    localStorage.setItem(LS.progress, JSON.stringify(p));
    renderSidebar();
    renderProgressBar();
  },
  allItemIds() {
    const ids = [];
    COURSE.modules.forEach(m => {
      m.lessons.forEach(l => ids.push(l.id));
      if (m.capstone) ids.push(m.capstone.id);
    });
    return ids;
  },
  percent() {
    const ids = this.allItemIds();
    const done = this.get();
    const count = ids.filter(id => done[id]).length;
    return Math.round((count / ids.length) * 100);
  }
};

/* ---------------- Simple localStorage list helpers ---------------- */
function loadList(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
function saveList(key, list) { localStorage.setItem(key, JSON.stringify(list)); }

/* ============================================================
   RENDERING
   ============================================================ */
let currentLessonId = null;

function findItem(id) {
  for (const m of COURSE.modules) {
    for (const l of m.lessons) if (l.id === id) return { module: m, lesson: l };
    if (m.capstone && m.capstone.id === id) return { module: m, capstone: m.capstone };
  }
  return null;
}

function flatSequence() {
  const seq = [];
  COURSE.modules.forEach(m => {
    m.lessons.forEach(l => seq.push({ moduleId: m.id, id: l.id }));
    if (m.capstone) seq.push({ moduleId: m.id, id: m.capstone.id });
  });
  return seq;
}

function renderSidebar() {
  const nav = document.getElementById('course-nav');
  const done = Progress.get();
  nav.innerHTML = COURSE.modules.map(m => {
    const items = [...m.lessons.map(l => ({ id: l.id, label: l.title, isCapstone: false })),
      m.capstone ? { id: m.capstone.id, label: '✏️ ' + m.capstone.title, isCapstone: true } : null].filter(Boolean);
    const moduleDoneCount = items.filter(i => done[i.id]).length;
    const isOpen = items.some(i => i.id === currentLessonId) || nav.dataset.opened === m.id;
    return `
    <div class="nav-module ${isOpen ? 'open' : ''}" data-module="${m.id}">
      <button class="nav-module-head" data-toggle="${m.id}">
        <span class="nav-module-icon">${m.icon}</span>
        <span class="nav-module-title">${m.title}</span>
        <span class="nav-module-count">${moduleDoneCount}/${items.length}</span>
        <span class="nav-caret">›</span>
      </button>
      <div class="nav-module-body">
        ${items.map(i => `
          <button class="nav-lesson ${i.id === currentLessonId ? 'active' : ''} ${i.isCapstone ? 'is-capstone' : ''}" data-lesson="${i.id}">
            <span class="nav-dot ${done[i.id] ? 'done' : ''}">${done[i.id] ? '✓' : ''}</span>
            <span>${i.label}</span>
          </button>`).join('')}
      </div>
    </div>`;
  }).join('');

  nav.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = btn.closest('.nav-module');
      el.classList.toggle('open');
    });
  });
  nav.querySelectorAll('[data-lesson]').forEach(btn => {
    btn.addEventListener('click', () => goTo(btn.dataset.lesson));
  });
}

function renderProgressBar() {
  const pct = Progress.percent();
  const bar = document.getElementById('course-progress-fill');
  const label = document.getElementById('course-progress-label');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = pct + '% complete';
  const ring = document.getElementById('hero-progress-num');
  if (ring) ring.textContent = pct + '%';
}

function goTo(id) {
  currentLessonId = id;
  localStorage.setItem(LS.lastLesson, id);
  const found = findItem(id);
  if (!found) return;
  const main = document.getElementById('course-main');

  if (found.lesson) {
    const idx = found.module.lessons.findIndex(l => l.id === id);
    main.innerHTML = renderLesson(found.module, found.lesson, idx);
  } else if (found.capstone) {
    main.innerHTML = renderCapstone(found.module, found.capstone);
  }

  renderSidebar();
  wireLessonInteractions(found);
  window.scrollTo({ top: document.getElementById('course-shell').offsetTop - 20, behavior: 'smooth' });
  document.getElementById('course-nav').dataset.opened = found.module.id;
}

function moduleProgressChip(module) {
  return `<span class="chip">${module.subtitle}</span>`;
}

function navButtons(currentId) {
  const seq = flatSequence();
  const idx = seq.findIndex(s => s.id === currentId);
  const prev = idx > 0 ? seq[idx - 1] : null;
  const next = idx < seq.length - 1 ? seq[idx + 1] : null;
  return `
    <div class="lesson-nav">
      ${prev ? `<button class="btn-ghost" data-nav="${prev.id}">← Previous</button>` : `<span></span>`}
      ${next ? `<button class="btn-primary-course" data-nav="${next.id}" data-complete-and-next="${currentId}">Mark complete & continue →</button>`
             : `<button class="btn-primary-course" data-complete-and-next="${currentId}" data-finish="1">Mark complete & finish ✓</button>`}
    </div>`;
}

function renderLesson(module, lesson, idx) {
  const done = Progress.isDone(lesson.id);
  return `
    <div class="lesson-card">
      <div class="lesson-meta">
        ${moduleProgressChip(module)}
        <span class="lesson-index">Module ${COURSE.modules.indexOf(module) + 1} · Lesson ${idx + 1} of ${module.lessons.length}</span>
        <span class="lesson-time">⏱ ${lesson.time}</span>
      </div>
      <h2 class="lesson-title">${lesson.title}</h2>
      <div class="lesson-body">${lesson.body}</div>
      ${lesson.takeaway ? `<div class="takeaway"><strong>Key takeaway</strong><p>${lesson.takeaway}</p></div>` : ''}
      <label class="complete-toggle">
        <input type="checkbox" data-toggle-complete="${lesson.id}" ${done ? 'checked' : ''}>
        <span>Mark this lesson complete</span>
      </label>
      ${navButtons(lesson.id)}
    </div>`;
}

function renderCapstone(module, cap) {
  const done = Progress.isDone(cap.id);
  let inner = '';
  if (cap.type === 'reflection') inner = renderReflectionTool(cap);
  else if (cap.type === 'triggerlog') inner = renderTriggerLogTool(cap);
  else if (cap.type === 'thoughtrecord') inner = renderThoughtRecordTool(cap);
  else if (cap.type === 'plan') inner = renderPlanTool(cap);
  else if (cap.type === 'resources') inner = renderResourcesTool(cap);
  else if (cap.type === 'guidedsession') inner = renderGuidedSessionTool(cap);

  return `
    <div class="lesson-card capstone-card">
      <div class="lesson-meta">
        ${moduleProgressChip(module)}
        <span class="lesson-index">Module ${COURSE.modules.indexOf(module) + 1} · Exercise</span>
      </div>
      <h2 class="lesson-title">✏️ ${cap.title}</h2>
      ${cap.note ? `<p class="capstone-note">${cap.note}</p>` : ''}
      ${inner}
      <label class="complete-toggle">
        <input type="checkbox" data-toggle-complete="${cap.id}" ${done ? 'checked' : ''}>
        <span>Mark this exercise complete</span>
      </label>
      ${navButtons(cap.id)}
    </div>`;
}

/* ---------- Reflection tool ---------- */
function renderReflectionTool(cap) {
  const saved = loadList(LS.reflections).find(r => r.id === cap.id) || {};
  return `<div class="tool reflection-tool" data-reflect-id="${cap.id}">
    ${cap.prompts.map((p, i) => `
      <div class="field">
        <label>${i + 1}. ${p}</label>
        <textarea rows="3" data-r-idx="${i}" placeholder="Write freely — there's no right answer.">${saved['a' + i] || ''}</textarea>
      </div>`).join('')}
    ${cap.note ? `<p class="hint-box">${cap.note}</p>` : ''}
    <button class="btn-ghost" data-save-reflection="${cap.id}">Save my answers</button>
    <span class="save-flash" id="flash-${cap.id}"></span>
  </div>`;
}

/* ---------- Trigger log tool ---------- */
function renderTriggerLogTool(cap) {
  const entries = loadList(LS.triggerLog);
  return `<div class="tool trigger-tool">
    <form class="entry-form" id="trigger-form">
      <div class="field-row">
        <div class="field"><label>Where were you?</label><input type="text" name="location" placeholder="e.g. kitchen, office, matatu" required></div>
        <div class="field"><label>What triggered it?</label><input type="text" name="trigger" placeholder="Event, thought, or person" required></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Physical symptoms</label><input type="text" name="physical" placeholder="e.g. tight chest, racing heart"></div>
        <div class="field"><label>Emotional symptoms</label><input type="text" name="emotional" placeholder="e.g. dread, irritability"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>What did you do?</label><input type="text" name="behavior" placeholder="How you responded"></div>
        <div class="field"><label>Anxiety style</label>
          <select name="style">${ANXIETY_STYLES.map(s => `<option>${s}</option>`).join('')}</select>
        </div>
      </div>
      <button type="submit" class="btn-primary-course">+ Add entry</button>
    </form>
    <div class="entry-list" id="trigger-entries">${renderTriggerEntries(entries)}</div>
  </div>`;
}
function renderTriggerEntries(entries) {
  if (!entries.length) return `<p class="empty-state">No entries yet — your first one will show up here.</p>`;
  return entries.slice().reverse().map(e => `
    <div class="entry-item">
      <div class="entry-item-head">
        <span class="entry-date">${new Date(e.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
        <span class="entry-badge">${e.style}</span>
        <button class="entry-del" data-del-trigger="${e.date}" title="Delete">✕</button>
      </div>
      <p><strong>${e.location}</strong> — ${e.trigger}</p>
      ${e.physical ? `<p class="entry-line">🫀 ${e.physical}</p>` : ''}
      ${e.emotional ? `<p class="entry-line">💭 ${e.emotional}</p>` : ''}
      ${e.behavior ? `<p class="entry-line">↳ ${e.behavior}</p>` : ''}
    </div>`).join('');
}

/* ---------- Thought record tool ---------- */
function renderThoughtRecordTool(cap) {
  const entries = loadList(LS.thoughtLog);
  return `<div class="tool thought-tool">
    <form class="entry-form" id="thought-form">
      <div class="field"><label>Situation</label><input type="text" name="situation" placeholder="What was happening when the thought occurred?" required></div>
      <div class="field"><label>Anxious thought</label><textarea name="thought" rows="2" placeholder="Write it as a sentence." required></textarea></div>
      <div class="field-row">
        <div class="field"><label>Thinking trap</label>
          <select name="trap">${THINKING_TRAPS.map(t => `<option>${t}</option>`).join('')}</select>
        </div>
        <div class="field"><label>Intensity before (1–10)</label>
          <input type="range" name="before" min="1" max="10" value="7" oninput="this.nextElementSibling.textContent=this.value">
          <output>7</output>
        </div>
      </div>
      <div class="field-row">
        <div class="field"><label>Evidence for</label><textarea name="evFor" rows="2" placeholder="What facts actually support this?"></textarea></div>
        <div class="field"><label>Evidence against</label><textarea name="evAgainst" rows="2" placeholder="What facts don't fit?"></textarea></div>
      </div>
      <div class="field"><label>Balanced thought</label><textarea name="balanced" rows="2" placeholder="Rewrite it to be more complete and realistic."></textarea></div>
      <div class="field">
        <label>Intensity after (1–10)</label>
        <input type="range" name="after" min="1" max="10" value="5" oninput="this.nextElementSibling.textContent=this.value">
        <output>5</output>
      </div>
      <button type="submit" class="btn-primary-course">+ Save thought record</button>
    </form>
    <div class="entry-list" id="thought-entries">${renderThoughtEntries(entries)}</div>
  </div>`;
}
function renderThoughtEntries(entries) {
  if (!entries.length) return `<p class="empty-state">No thought records yet.</p>`;
  return entries.slice().reverse().map(e => `
    <div class="entry-item">
      <div class="entry-item-head">
        <span class="entry-date">${new Date(e.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
        <span class="entry-badge">${e.trap}</span>
        <button class="entry-del" data-del-thought="${e.date}" title="Delete">✕</button>
      </div>
      <p><strong>${e.situation}</strong></p>
      <p class="entry-line">💭 "${e.thought}"</p>
      ${e.balanced ? `<p class="entry-line">⚖️ ${e.balanced}</p>` : ''}
      <div class="intensity-shift">
        <span>Before <strong>${e.before}</strong></span>
        <div class="shift-bar"><div class="shift-fill" style="width:${e.before * 10}%"></div></div>
        <span>→</span>
        <div class="shift-bar"><div class="shift-fill after" style="width:${e.after * 10}%"></div></div>
        <span>After <strong>${e.after}</strong></span>
      </div>
    </div>`).join('');
}

/* ---------- Personal plan tool ---------- */
function renderPlanTool(cap) {
  const p = JSON.parse(localStorage.getItem(LS.plan) || '{}');
  const field = (name, label, placeholder, val, isTextarea = true) => `
    <div class="field">
      <label>${label}</label>
      ${isTextarea ? `<textarea name="${name}" rows="2" placeholder="${placeholder}">${val || ''}</textarea>`
                   : `<input type="text" name="${name}" placeholder="${placeholder}" value="${val || ''}">`}
    </div>`;
  return `<div class="tool plan-tool">
    <form id="plan-form">
      <h4 class="plan-section-title">😴 Sleep</h4>
      ${field('sleepNow', 'What does my current sleep look like, honestly?', 'Quality, consistency, duration', p.sleepNow)}
      ${field('sleepChange', 'One thing I could change this week', '', p.sleepChange)}

      <h4 class="plan-section-title">🚶 Movement</h4>
      ${field('moveNow', 'How much am I currently moving each day?', '', p.moveNow)}
      ${field('moveChange', 'One realistic way to add more movement this week', '', p.moveChange)}

      <h4 class="plan-section-title">🍽️ Nutrition</h4>
      ${field('nutritionPattern', 'Patterns in my eating that affect my anxiety', 'Caffeine, skipped meals, alcohol, blood sugar', p.nutritionPattern)}
      ${field('nutritionChange', 'One small nutritional change I\u2019m willing to try', '', p.nutritionChange)}

      <h4 class="plan-section-title">☀️ Daily Routine</h4>
      ${field('morningPractice', 'Morning practice I want to start with', '', p.morningPractice)}
      ${field('eveningPractice', 'Evening practice I want to start with', '', p.eveningPractice)}
      ${field('weeks', 'I will try these consistently for (weeks) before adding more', 'e.g. 2', p.weeks, false)}

      <h4 class="plan-section-title">🧭 Boundaries</h4>
      ${field('overextended', 'One area of my life where I\u2019m currently overextended', '', p.overextended)}
      ${field('boundaryAvoiding', 'One boundary I\u2019ve been avoiding setting', '', p.boundaryAvoiding)}
      ${field('boundarySay', 'What I will say, and to whom', '', p.boundarySay)}

      <button type="submit" class="btn-primary-course">Save my plan</button>
      <span class="save-flash" id="flash-plan"></span>
    </form>
  </div>`;
}

/* ---------- Resources tool ---------- */
function renderResourcesTool(cap) {
  const group = (title, icon, items) => `
    <div class="resource-group">
      <h4>${icon} ${title}</h4>
      <div class="resource-cards">
        ${items.map(r => `
          <div class="resource-card">
            <div>
              <p class="resource-name">${r.name}</p>
              <p class="resource-detail">${r.detail}</p>
            </div>
            ${r.href ? `<a class="btn-ghost small" href="${r.href}" target="_blank" rel="noopener">Open</a>` : ''}
          </div>`).join('')}
      </div>
    </div>`;
  return `<div class="tool resources-tool">
    ${group('Crisis Support — Immediate Help', '🆘', RESOURCES.crisis)}
    ${group('Finding a Therapist', '🧑\u200d⚕️', RESOURCES.therapy)}
    ${group('Support Communities', '🫂', RESOURCES.community)}
    <p class="capstone-note">If you are in immediate danger or experiencing a mental health emergency, please contact emergency services in your country or go to your nearest emergency department. You do not need to manage a crisis alone.</p>
  </div>`;
}

/* ---------- Guided session player ---------- */
function renderGuidedSessionTool(cap) {
  return `<div class="tool session-tool" id="session-${cap.id}" data-steps='${JSON.stringify(cap.steps)}'>
    <div class="session-player">
      <div class="session-ring">
        <svg viewBox="0 0 120 120" class="session-ring-svg">
          <circle cx="60" cy="60" r="52" class="ring-track"></circle>
          <circle cx="60" cy="60" r="52" class="ring-fill" id="session-ring-fill-${cap.id}"></circle>
        </svg>
        <div class="session-ring-label">
          <span class="session-step-label" id="session-step-label-${cap.id}">Ready</span>
          <span class="session-step-count" id="session-step-count-${cap.id}">0 / ${cap.steps.length}</span>
        </div>
      </div>
      <p class="session-text" id="session-text-${cap.id}">Press play to begin the 5-minute guided reset. You can pause anytime.</p>
      <div class="session-controls">
        <button class="btn-primary-course" id="session-play-${cap.id}">▶ Play</button>
        <button class="btn-ghost" id="session-pause-${cap.id}" disabled>⏸ Pause</button>
        <button class="btn-ghost" id="session-restart-${cap.id}">↺ Restart</button>
        <label class="voice-toggle"><input type="checkbox" id="session-voice-${cap.id}"> Read aloud</label>
      </div>
    </div>
  </div>`;
}

/* ============================================================
   TOOL WIRING (event listeners after render)
   ============================================================ */
function wireLessonInteractions(found) {
  document.querySelectorAll('[data-toggle-complete]').forEach(cb => {
    cb.addEventListener('change', () => Progress.toggle(cb.dataset.toggleComplete, cb.checked));
  });
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.completeAndNext) Progress.toggle(btn.dataset.completeAndNext, true);
      goTo(btn.dataset.nav);
    });
  });
  const finishBtn = document.querySelector('[data-finish]');
  if (finishBtn) finishBtn.addEventListener('click', () => {
    Progress.toggle(finishBtn.dataset.completeAndNext, true);
    showCompletion();
  });

  // reflection save
  document.querySelectorAll('[data-save-reflection]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.saveReflection;
      const wrap = document.querySelector(`[data-reflect-id="${id}"]`);
      const answers = {};
      wrap.querySelectorAll('textarea[data-r-idx]').forEach(t => answers['a' + t.dataset.rIdx] = t.value);
      const list = loadList(LS.reflections).filter(r => r.id !== id);
      list.push({ id, ...answers });
      saveList(LS.reflections, list);
      Progress.toggle(id, true);
      const flash = document.getElementById(`flash-${id}`);
      flash.textContent = 'Saved ✓';
      setTimeout(() => flash.textContent = '', 1800);
    });
  });

  // trigger log
  const triggerForm = document.getElementById('trigger-form');
  if (triggerForm) {
    triggerForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(triggerForm);
      const entry = Object.fromEntries(fd.entries());
      entry.date = Date.now();
      const list = loadList(LS.triggerLog); list.push(entry); saveList(LS.triggerLog, list);
      document.getElementById('trigger-entries').innerHTML = renderTriggerEntries(list);
      triggerForm.reset();
      Progress.toggle('m2-triggerlog', true);
      wireDeleteButtons();
    });
  }

  // thought record
  const thoughtForm = document.getElementById('thought-form');
  if (thoughtForm) {
    thoughtForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(thoughtForm);
      const entry = Object.fromEntries(fd.entries());
      entry.date = Date.now();
      const list = loadList(LS.thoughtLog); list.push(entry); saveList(LS.thoughtLog, list);
      document.getElementById('thought-entries').innerHTML = renderThoughtEntries(list);
      thoughtForm.reset();
      Progress.toggle('m4-thoughtrecord', true);
      wireDeleteButtons();
    });
  }
  wireDeleteButtons();

  // plan
  const planForm = document.getElementById('plan-form');
  if (planForm) {
    planForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(planForm);
      localStorage.setItem(LS.plan, JSON.stringify(Object.fromEntries(fd.entries())));
      Progress.toggle('m5-plan', true);
      const flash = document.getElementById('flash-plan');
      flash.textContent = 'Saved ✓';
      setTimeout(() => flash.textContent = '', 1800);
    });
  }

  // openers (module 6.3)
  const openerMount = document.getElementById('tool-openers');
  if (openerMount) renderOpeners(openerMount);

  // module 3 tools
  const breathingMount = document.getElementById('tool-breathing');
  if (breathingMount) initBreathingTool(breathingMount);
  const groundingMount = document.getElementById('tool-grounding');
  if (groundingMount) initGroundingTool(groundingMount);
  const bodyscanMount = document.getElementById('tool-bodyscan');
  if (bodyscanMount) initBodyScanTool(bodyscanMount);

  // guided session
  const sessionTool = document.querySelector('.session-tool');
  if (sessionTool) initGuidedSession(sessionTool);
}

function wireDeleteButtons() {
  document.querySelectorAll('[data-del-trigger]').forEach(b => {
    b.addEventListener('click', () => {
      const list = loadList(LS.triggerLog).filter(e => String(e.date) !== b.dataset.delTrigger);
      saveList(LS.triggerLog, list);
      document.getElementById('trigger-entries').innerHTML = renderTriggerEntries(list);
      wireDeleteButtons();
    });
  });
  document.querySelectorAll('[data-del-thought]').forEach(b => {
    b.addEventListener('click', () => {
      const list = loadList(LS.thoughtLog).filter(e => String(e.date) !== b.dataset.delThought);
      saveList(LS.thoughtLog, list);
      document.getElementById('thought-entries').innerHTML = renderThoughtEntries(list);
      wireDeleteButtons();
    });
  });
}

function renderOpeners(mount) {
  const tabs = Object.keys(OPENERS);
  let active = 'friend';
  function draw() {
    mount.innerHTML = `
      <div class="opener-tool">
        <div class="opener-tabs">
          ${tabs.map(t => `<button class="opener-tab ${t === active ? 'active' : ''}" data-opener-tab="${t}">${t[0].toUpperCase() + t.slice(1)}</button>`).join('')}
        </div>
        <div class="opener-list">
          ${OPENERS[active].map(line => `
            <div class="opener-line">
              <span>"${line}"</span>
              <button class="copy-btn" data-copy="${encodeURIComponent(line)}">Copy</button>
            </div>`).join('')}
        </div>
      </div>`;
    mount.querySelectorAll('[data-opener-tab]').forEach(b => b.addEventListener('click', () => { active = b.dataset.openerTab; draw(); }));
    mount.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => {
      navigator.clipboard?.writeText(decodeURIComponent(b.dataset.copy)).then(() => {
        const old = b.textContent; b.textContent = 'Copied ✓';
        setTimeout(() => b.textContent = old, 1500);
      });
    }));
  }
  draw();
}

/* ---------- Breathing tool ---------- */
function initBreathingTool(mount) {
  const PATTERNS = {
    box: { label: 'Box Breathing', phases: [['Inhale', 4], ['Hold', 4], ['Exhale', 4], ['Hold', 4]] },
    '478': { label: '4-7-8 Breathing', phases: [['Inhale', 4], ['Hold', 7], ['Exhale', 8]] }
  };
  let pattern = 'box', running = false, phaseIdx = 0, cycles = 0, timer = null, secLeft = 0;

  mount.innerHTML = `
    <div class="breathing-widget">
      <div class="breath-tabs">
        <button class="breath-tab active" data-pattern="box">Box Breathing</button>
        <button class="breath-tab" data-pattern="478">4-7-8 Breathing</button>
      </div>
      <div class="breath-circle-wrap">
        <div class="breath-circle" id="breath-circle"><span id="breath-phase">Ready</span></div>
      </div>
      <p class="breath-count">Cycle <span id="breath-cycles">0</span></p>
      <div class="session-controls">
        <button class="btn-primary-course" id="breath-start">▶ Start</button>
        <button class="btn-ghost" id="breath-stop" disabled>⏸ Stop</button>
      </div>
    </div>`;

  const circle = mount.querySelector('#breath-circle');
  const phaseLabel = mount.querySelector('#breath-phase');
  const cyclesLabel = mount.querySelector('#breath-cycles');
  const startBtn = mount.querySelector('#breath-start');
  const stopBtn = mount.querySelector('#breath-stop');

  mount.querySelectorAll('[data-pattern]').forEach(btn => btn.addEventListener('click', () => {
    if (running) return;
    pattern = btn.dataset.pattern;
    mount.querySelectorAll('[data-pattern]').forEach(b => b.classList.toggle('active', b === btn));
  }));

  function tick() {
    const phases = PATTERNS[pattern].phases;
    const [name, dur] = phases[phaseIdx];
    if (secLeft === 0) secLeft = dur;
    phaseLabel.textContent = `${name} ${secLeft}`;
    circle.className = 'breath-circle ' + (name === 'Inhale' ? 'grow' : name === 'Exhale' ? 'shrink' : 'hold');
    secLeft--;
    if (secLeft < 0) {
      phaseIdx++;
      if (phaseIdx >= phases.length) { phaseIdx = 0; cycles++; cyclesLabel.textContent = cycles; }
      secLeft = 0;
    }
  }

  startBtn.addEventListener('click', () => {
    running = true; phaseIdx = 0; secLeft = 0;
    startBtn.disabled = true; stopBtn.disabled = false;
    mount.querySelectorAll('[data-pattern]').forEach(b => b.disabled = true);
    tick();
    timer = setInterval(tick, 1000);
  });
  stopBtn.addEventListener('click', stopBreathing);
  function stopBreathing() {
    running = false; clearInterval(timer);
    startBtn.disabled = false; stopBtn.disabled = true;
    mount.querySelectorAll('[data-pattern]').forEach(b => b.disabled = false);
    circle.className = 'breath-circle';
    phaseLabel.textContent = 'Ready';
  }
}

/* ---------- Grounding tool ---------- */
function initGroundingTool(mount) {
  const STEPS = [
    { n: 5, sense: 'SEE', icon: '👀', placeholder: 'e.g. a blue chair with a scratch on the armrest' },
    { n: 4, sense: 'TOUCH', icon: '✋', placeholder: 'e.g. the fabric of your sleeve' },
    { n: 3, sense: 'HEAR', icon: '👂', placeholder: 'e.g. traffic in the distance' },
    { n: 2, sense: 'SMELL', icon: '👃', placeholder: 'e.g. coffee, fresh air' },
    { n: 1, sense: 'TASTE', icon: '👅', placeholder: 'e.g. lingering mint' },
  ];
  let step = 0;

  function draw() {
    if (step >= STEPS.length) {
      mount.innerHTML = `
        <div class="grounding-widget grounding-done">
          <p>✅ You are here. Present. That's the exercise.</p>
          <button class="btn-ghost" id="ground-restart">↺ Do it again</button>
        </div>`;
      mount.querySelector('#ground-restart').addEventListener('click', () => { step = 0; draw(); });
      return;
    }
    const s = STEPS[step];
    mount.innerHTML = `
      <div class="grounding-widget">
        <div class="ground-progress">${STEPS.map((_, i) => `<span class="ground-dot ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}"></span>`).join('')}</div>
        <div class="ground-step">
          <div class="ground-icon">${s.icon}</div>
          <p class="ground-instruction">Name <strong>${s.n}</strong> things you can <strong>${s.sense}</strong></p>
          <div class="ground-inputs">
            ${Array.from({ length: s.n }).map((_, i) => `<input type="text" placeholder="${i === 0 ? s.placeholder : '…'}">`).join('')}
          </div>
          <button class="btn-primary-course" id="ground-next">Next →</button>
        </div>
      </div>`;
    mount.querySelector('#ground-next').addEventListener('click', () => { step++; draw(); });
  }
  draw();
}

/* ---------- Body scan tool ---------- */
function initBodyScanTool(mount) {
  const PARTS = [
    'Head & scalp', 'Forehead & eyes', 'Jaw & mouth', 'Neck & shoulders',
    'Chest', 'Arms & hands', 'Stomach & core', 'Lower back & hips', 'Legs & feet'
  ];
  let idx = 0, running = false, timer = null;

  function draw() {
    mount.innerHTML = `
      <div class="bodyscan-widget">
        <div class="bodyscan-track">
          ${PARTS.map((p, i) => `<div class="bodyscan-part ${i === idx ? 'active' : ''} ${i < idx ? 'done' : ''}">${p}</div>`).join('')}
        </div>
        <p class="bodyscan-current">Focus on: <strong>${PARTS[idx]}</strong></p>
        <p class="bodyscan-hint">Notice any tightness here. Breathe, and let it soften.</p>
        <div class="session-controls">
          <button class="btn-primary-course" id="scan-toggle">${running ? '⏸ Pause' : '▶ Start guided scan'}</button>
          <button class="btn-ghost" id="scan-restart">↺ Restart</button>
        </div>
      </div>`;
    mount.querySelector('#scan-toggle').addEventListener('click', toggle);
    mount.querySelector('#scan-restart').addEventListener('click', () => { idx = 0; stop(); draw(); });
  }
  function step() {
    idx++;
    if (idx >= PARTS.length) { stop(); idx = PARTS.length - 1; draw(); return; }
    draw();
  }
  function toggle() {
    if (running) { stop(); } else { running = true; timer = setInterval(step, 6000); draw(); }
  }
  function stop() { running = false; clearInterval(timer); }
  draw();
}

/* ---------- Guided session (audio-style) ---------- */
function initGuidedSession(mount) {
  const capId = mount.id.replace('session-', '');
  const steps = JSON.parse(mount.dataset.steps);
  let idx = -1, playing = false, timer = null, elapsed = 0;
  const total = steps.reduce((s, st) => s + st.seconds, 0);

  const ring = document.getElementById(`session-ring-fill-${capId}`);
  const stepLabel = document.getElementById(`session-step-label-${capId}`);
  const stepCount = document.getElementById(`session-step-count-${capId}`);
  const textEl = document.getElementById(`session-text-${capId}`);
  const playBtn = document.getElementById(`session-play-${capId}`);
  const pauseBtn = document.getElementById(`session-pause-${capId}`);
  const restartBtn = document.getElementById(`session-restart-${capId}`);
  const voiceToggle = document.getElementById(`session-voice-${capId}`);

  const CIRC = 2 * Math.PI * 52;
  ring.style.strokeDasharray = CIRC;
  ring.style.strokeDashoffset = CIRC;

  function speak(text) {
    if (!voiceToggle.checked || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.85; u.pitch = 0.95;
    window.speechSynthesis.speak(u);
  }

  function renderStep() {
    const s = steps[idx];
    stepLabel.textContent = s.label;
    stepCount.textContent = `${idx + 1} / ${steps.length}`;
    textEl.textContent = s.text;
    speak(s.text);
  }

  function advance() {
    idx++;
    if (idx >= steps.length) { finish(); return; }
    renderStep();
    let secLeft = steps[idx].seconds;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      secLeft--; elapsed++;
      ring.style.strokeDashoffset = CIRC - (elapsed / total) * CIRC;
      if (secLeft <= 0) { clearInterval(timer); advance(); }
    }, 1000);
  }

  function finish() {
    playing = false;
    stepLabel.textContent = 'Complete';
    textEl.textContent = 'Session complete. Notice how you feel now compared to when you started.';
    playBtn.disabled = false; playBtn.textContent = '▶ Play again';
    pauseBtn.disabled = true;
    Progress.toggle('m3-session', true);
    window.speechSynthesis?.cancel();
  }

  playBtn.addEventListener('click', () => {
    playing = true;
    playBtn.disabled = true; pauseBtn.disabled = false;
    if (idx === -1 || idx >= steps.length) { idx = -1; elapsed = 0; ring.style.strokeDashoffset = CIRC; }
    advance();
  });
  pauseBtn.addEventListener('click', () => {
    playing = false;
    clearInterval(timer);
    window.speechSynthesis?.cancel();
    playBtn.disabled = false; playBtn.textContent = '▶ Resume'; pauseBtn.disabled = true;
  });
  restartBtn.addEventListener('click', () => {
    clearInterval(timer); window.speechSynthesis?.cancel();
    idx = -1; elapsed = 0; playing = false;
    ring.style.strokeDashoffset = CIRC;
    stepLabel.textContent = 'Ready'; stepCount.textContent = `0 / ${steps.length}`;
    textEl.textContent = 'Press play to begin the 5-minute guided reset. You can pause anytime.';
    playBtn.disabled = false; playBtn.textContent = '▶ Play'; pauseBtn.disabled = true;
  });
}

/* ---------- Completion screen ---------- */
function showCompletion() {
  const main = document.getElementById('course-main');
  const pct = Progress.percent();
  main.innerHTML = `
    <div class="lesson-card completion-card">
      <div class="completion-badge">🎓</div>
      <h2 class="lesson-title">You've Come a Long Way</h2>
      <p>When you started this course, anxiety may have felt like something happening to you — unpredictable, overwhelming, and outside your control.</p>
      <p>You now understand what anxiety actually is, can recognize your personal triggers and thinking patterns, and have real, evidence-based tools you can reach for the moment anxiety spikes.</p>
      <p>This isn't the end of the work — managing anxiety is an ongoing practice, not a destination. There will be hard days. That's normal. What matters is that you keep coming back.</p>
      <div class="completion-stat">Course progress: <strong>${pct}%</strong></div>
      <div class="field"><label>What's the single most important thing you're taking away from this course?</label><textarea rows="2" id="final-q1"></textarea></div>
      <div class="field"><label>Which tool do you think will be most useful for where you are right now?</label><textarea rows="2" id="final-q2"></textarea></div>
      <div class="field"><label>Is there anything from this course that makes you think professional support might be worth exploring?</label><textarea rows="2" id="final-q3"></textarea></div>
      <button class="btn-primary-course" id="save-final">Save my answers</button>
      <span class="save-flash" id="flash-final"></span>
      <p class="capstone-note" style="margin-top:24px;">📚 Next recommended course: <strong>Understanding Depression — A Companion Course</strong> (coming soon to Learn &amp; Grow).</p>
    </div>`;
  document.getElementById('save-final').addEventListener('click', () => {
    const answers = {
      id: 'final', a0: document.getElementById('final-q1').value,
      a1: document.getElementById('final-q2').value, a2: document.getElementById('final-q3').value
    };
    const list = loadList(LS.reflections).filter(r => r.id !== 'final');
    list.push(answers); saveList(LS.reflections, list);
    const flash = document.getElementById('flash-final');
    flash.textContent = 'Saved ✓'; setTimeout(() => flash.textContent = '', 1800);
  });
  window.scrollTo({ top: document.getElementById('course-shell').offsetTop - 20, behavior: 'smooth' });
}

/* ============================================================
   INIT
   ============================================================ */
function initCourse() {
  document.getElementById('course-title').textContent = COURSE.title;
  renderSidebar();
  renderProgressBar();
  const last = localStorage.getItem(LS.lastLesson);
  const seq = flatSequence();
  const startId = (last && findItem(last)) ? last : seq[0].id;
  goTo(startId);

  document.getElementById('resume-btn')?.addEventListener('click', () => goTo(startId));
}

document.addEventListener('DOMContentLoaded', initCourse);