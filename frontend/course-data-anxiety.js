/* ============================================================
   AfyaMind — Course Data: Understanding & Managing Anxiety and Stress
   Load this BEFORE course-engine.js
   ============================================================ */

const COURSE_ID = 'anxiety-stress-v1';
const COURSE_TITLE = 'Understanding & Managing Anxiety and Stress';

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
        note: "There are no right answers here — only honest ones. Pick the one change that feels most important right now and begin there.",
        sections: [
          { icon: '😴', title: 'Sleep', fields: [
            { name: 'sleepNow', label: 'What does my current sleep look like, honestly?', placeholder: 'Quality, consistency, duration' },
            { name: 'sleepChange', label: 'One thing I could change this week' },
          ]},
          { icon: '🚶', title: 'Movement', fields: [
            { name: 'moveNow', label: 'How much am I currently moving each day?' },
            { name: 'moveChange', label: 'One realistic way to add more movement this week' },
          ]},
          { icon: '🍽️', title: 'Nutrition', fields: [
            { name: 'nutritionPattern', label: 'Patterns in my eating that affect my anxiety', placeholder: 'Caffeine, skipped meals, alcohol, blood sugar' },
            { name: 'nutritionChange', label: "One small nutritional change I'm willing to try" },
          ]},
          { icon: '☀️', title: 'Daily Routine', fields: [
            { name: 'morningPractice', label: 'Morning practice I want to start with' },
            { name: 'eveningPractice', label: 'Evening practice I want to start with' },
            { name: 'weeks', label: 'I will try these consistently for (weeks) before adding more', placeholder: 'e.g. 2', textarea: false },
          ]},
          { icon: '🧭', title: 'Boundaries', fields: [
            { name: 'overextended', label: "One area of my life where I'm currently overextended" },
            { name: 'boundaryAvoiding', label: "One boundary I've been avoiding setting" },
            { name: 'boundarySay', label: 'What I will say, and to whom' },
          ]},
        ] }
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