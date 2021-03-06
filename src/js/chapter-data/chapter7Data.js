export default [
  {
  id: ' 1',
  thumbnailImagePath: '/chapter-thumbnails/grade7/grade7-chapter1-thumbnail2.jpeg',
  title: 'Nutrition in Plants',
  description: 'Watch videos to learn Chapter 1, Nutrition In Plants, from the Class 7 NCERT science book. Take a quiz on Autotrophs, Heterotrophs and Saprotrophs.',
  items: [{
    id: 'chapeter-1-video',
    kind: 'video',
    time: 3,
    title: 'Autotroph, Heterotroph and Saprotroph',
    instructions: dedent`
      These 3 words can be confusing.
      Watch this short video to understand and remember the meaning of Autotroph, Heterotroph and Saprotroph.
    `,
    videoId: 'cvQK7hXTWDE',
  }, {
    id: 'green-plants-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![green plant](/learning-items/grade7/green-plants-2.jpg)
      Green plants make their own food and are thus called ___________`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Autotrophs'
      },
      {
        id: 'opt2',
        text: 'Heterotrophs'
      },
      {
        id: 'opt3',
        text: 'Saprotrophs'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. _Auto_ means self and _troph_ means food or nourishment. _Autotrophs_ means organisms that make their own food.'
      },
      {
        answerSet: ['opt2'],
        response: 'No, Heterotroph is not correct. _Hetero_ means other and _troph_ means food or nourishment. Examples include you, your dog and the pitcher plant.'
      },
      {
        answerSet: ['opt3'],
        response: 'No, Saprotroph is not correct. _Sapro_ means dead or decaying and _troph_ means food or nourishment. Examples include mushrooms and worms.'
      }
    ]
  }, {
    id: 'teach-a-friend',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Teach a Friend',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![saprotroph mushrooms](/learning-items/grade7/mushrooms-2.jpg)
    Imagine a friend of yours is struggling to remember the definition of Saprotrophs.
    What will you tell him/her that will help them remember the definition of Saprotrophs? Write your answer in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here is a response from another student who answered this quiz:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: dedent`
            Sapro means dead or decaying. Troph means food or nourishment.
            To remember this, the video showed that Jaba The Hutt is a Saprotroph. I did not know who Jaba The Hutt was, but after looking at its picture, I realized that it lools like a big worm.
            And worms feed on dead and decaying matter.
            Therefore, Saprotroph get their food or nourishment from dead or decaying matter. Example worms and mushrooms.
            `
          },
        ]
      }
    }
  }, {
    id: 'photosynthesis-again',
    time: 1,
    kind: 'image',
    title: 'Photosynthesis - Ek Aur Baar',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    I know you have been studying photosynthesis for years now. And that it may be boring. But since the definition of photosynthesis is in the science book, let us look at it one more time.
    Sun is the source of energy of most living organisms.
    Plants use sunlight, carbon dioxide from the air, and water from the soil to make food (carbohydrates) and produce oxygen. This process is called photosynthesis.
    In the absence of photosynthesis, there would be no food, and life would be impossible on earth.`,

    imagePath: '/learning-items/grade7/photosynthesis.jpeg',

  }, {
    id: 'photosynthesis-video',
    kind: 'video',
    time: 3,
    title: 'Photosynthesis - A Simple Video',
    instructions: dedent`
      Here is a simple video that explains the reaction of photosynthesis. `,
    videoId: '-rsYk4eCKnA',
    endTime: 172,
  }, {
    id: 'stomata-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    We know that plants get water from the soil.
    How do they absorb Carbon dioxide and give out Oxygen?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'From their roots'
      },
      {
        id: 'opt2',
        text: 'From tiny openings in their leaves'
      },
      {
        id: 'opt3',
        text: 'I do not know'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Plants absorb water from their roots, and not Carbon dioxide.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Tiny openings on the leaves allow plants to absorb Carbon dioxide and give out Oxygen. These openings are called Stomata. We will learn about them next.'
      },
      {
        answerSet: ['opt3'],
        response: 'That is ok. Let us move to the next item to learn more about how plants absorb Carbon dioxide and give out Oxygen.'
      }
    ]
  }, {
    id: 'stomata-means-mouths',
    time: 1,
    kind: 'image',
    title: 'What is Stomata?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Stomata is a Greek word, which means mouths.
    In the picture below, we have zoomed into an image of the leaf. Here you see two stomata that look like tiny mouths surrounded by swollen lips.
    Stomata are tiny openings (or pores) in the leaf, from which plants take in carbon dioxide and give out water and oxygen.`,

    imagePath: '/learning-items/grade7/stomata-means-mouths-2.jpeg',

  }, {
    id: 'stomata-another-look',
    time: 1,
    kind: 'image',
    title: 'Stomata: Another Look',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Stomata are tiny openings (or pores) in the leaf, from which plants take in carbon dioxide and give out water and oxygen.`,

    imagePath: '/learning-items/grade7/stomata-diagram-2.jpeg',

  }, {
    id: 'stomata-microscope-open-close',
    time: 1,
    kind: 'image',
    title: 'Open and Closed Stomata',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Stomata open to absorb carbon dioxide, which is needed for photosynthesis.
    Now, when stomata are open, water is also lost. Therefore, when carbon dioxide is not needed by the plant, the stomata close to avoid water loss.
    Here you are looking at a microscopic image of an open and closed stoma.`,

    imagePath: '/learning-items/grade7/stomata-from-microscope-3.jpeg',

  }, {
    id: 'make-an-exam',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Make An Exam Question',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Imagine you were creating a final exam on the topic of Stomata.
    What is the most difficult stomata-related question you would ask in that exam?
    Tell us in the space below.`,
    hacks: {
      afterBody: {
        preface: 'Here are responses from other students who answered this quiz:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: dedent`What is the function of stomata?
            `
          },{
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: dedent`What will happen if there was no stomata in the leaf?
            `
          },{
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: dedent`Why does stomata close?
            `
          },
        ]
      }
    }
  }, {
    id: 'cholorophyll-meaning',
    time: 1,
    kind: 'image',
    title: 'What is Chlorophyll?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    _Chloro_ means green.
    _Phlly_ means leaf.
    Chlorophyll is a green pigment in leaves that captures energy from sunlight, which is later used to make food for the plant.
    In the image below, we have zoomed into a leaf using a microscope. The green substance inside the round spheres is Chlorophyll.
    _Image Source: Kristian Peters, Wikipedia_
    `,
    imagePath: '/learning-items/grade7/chlorophyll-definition-4.jpeg',
  }, {
    id: 'cholorophyll-analogy',
    time: 1,
    kind: 'image',
    title: 'Chlorophyll is like a Solar Panel',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Chlorophyll is like a Solar Panel; they both help capture energy from the sun.
    The energy captured by Chlorophyll is used to make food for plants.
    The energy capture by Solar Panels is used to light homes.
    `,
    imagePath: '/learning-items/grade7/chlorophyll-like-solar-panel-2.jpeg',
  }, {
    id: 'can-humans-photosynthesize',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Can humans photosynthesise?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![saprotroph mushrooms](/learning-items/grade7/beach-human-photosynthesis.jpg)
    Like plants, can humans make their own food using sunlight and water?
    In other words, could you sit in the sun for a while, and make the food that your body needs using the process of photosynthesis?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Yes'
      },
      {
        id: 'opt2',
        text: 'No'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. Humans do not have Chlorophyll, which is needed to convert the energy from the Sun to food.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Humans cannot photosynthesise. That means we cannot sit in the Sun for a few hours and convert sunlight into food. This is because we do not have Chlorophyll.'
      }
    ]
  }, {
    id: 'photosynthesis-experiment',
    time: 6,
    kind: 'image',
    title: 'Seeing Photosynthesis Happen - Video',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![sunflower photosynthesis teeth](/learning-items/grade7/sunflower.jpg)
      In this [YouTube Video](https://www.youtube.com/watch?v=ZnY9_wMZZWI&t=6s), a teacher shows how leaves produce oxygen through the process of photosynthesis.
      If you watch till the end, you will be amazed by this experiment.
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'amarbel-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![green plant](/learning-items/grade7/amarbel-2.jpeg)
      The yellow plant you see in this image is called _Amarbel_ or _Cuscuta_.
      It gets its food from the green plant in this image.
      Is the _Amarbel_ an autotroph, heterotroph or saprotroph?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Autotroph'
      },
      {
        id: 'opt2',
        text: 'Heterotroph'
      },
      {
        id: 'opt3',
        text: 'Saprotroph'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'No, this is not correct. _Auto_ means self and _troph_ means food or nourishment. That means plants that make their own food.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. _Hetero_ means other and _troph_ means food or nourishment. Since the Amarbel gets its nutrition from another plant it is called a Heterotroph. Amarbel is also called a parasite. We will learn about parasites next.'
      },
      {
        answerSet: ['opt3'],
        response: 'No, Saprotroph is not correct. _Sapro_ means dead or decaying and _troph_ means food or nourishment. Examples include mushrooms and worms. Amarbel gets its nutrition from the green plant; and the green plant is not dead.'
      }
    ]
  }, {
    id: 'parasites-and-hosts',
    time: 1,
    kind: 'image',
    title: 'Parasites and Hosts',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    A parasite is an organism that gets its nutrition from another organism. For example, the lice that live in human hair, feed on us humans. Thus lice are parasites and humans are their hosts
    Amarbel, the yellow plant you saw in a previous example, is also a parasite.
    You can think of parasites as heterotrophs.
    `,
    imagePath: '/learning-items/grade7/parasites-lice-host-2.jpeg',
  }, {
    id: 'insectivorous-plants',
    kind: 'video',
    time: 2,
    title: 'Insectivorous Plants',
    instructions: dedent`
      Insect eating plants are called Insectivorous Plants.
      In the video below, you will see how a Pitcher Plant consumes a snail.
      When a snail (or some insect) lands in the pitcher, they are digested by the digestive juices inside the pitcher.
      Plants like the Pitcher Plant, do not get all of the nutrition they need from photosynthesis, and thus need to feed on snails and other insects.
      `,
    videoId: 'BjWtAjdl4a0',
  }, {
    id: 'insectivorous-plants-toilet',
    kind: 'video',
    time: 2,
    title: 'Some Plants Act Like Toilets',
    instructions: dedent`
      You may have heard that plants need Nitrogen, and that they get some of that nitrogen from soil.
      Pitcher Plant is different. It acts as a toilet for some animals, who come to lick the nectar from the plant, and end up dropping their faeces (or poop) inside the pitcher.
      The poop is rich in nitrogen and acts as a fertilizer for the Pitcher Plant. This makes the pitcher plant a toilet for some animals in the jungle.
      `,
    videoId: 'TwL7K_loRjM',
    endTime: 77,
  }, {
    id: 'lizard-time-lapse',
    kind: 'video',
    time: 2,
    title: 'Bonus Video - Lizard eaten by Ants',
    instructions: dedent`
      This video was taken over several hours and then run in fast forward mode.
      Here, a dead lizard is completely eaten by Ants, in only a few hours.
      Thus Ants can be called Saprotrophs.
      `,
    videoId: 'R3Mt2E1M6dU',
    startTime: 10,
    locked: true,

  },]
},{
    id: " 2",
    thumbnailImagePath: "/chapter-thumbnails/grade7/Grade7-Chapter2-Thumbnail.png",
    title: "Nutrition in Animals",
    description:
      "Learn Chapter 2, Nutrition In Animals, from the Class 7 NCERT science book by answering questions, viewing solutions and watching videos.",
    items: [
      {
        id: "chapter-2-video",
        kind: "video",
        time: 5,
        title: "Food's Journey: From Mouth To Stomach",
        instructions: dedent`
    In this video we talk to a Mr. Sunil, who experiences a lot of digestion-related problems.

    While talking to him, we will also follow the path that food takes from our mouth to our stomach.
    `,
        videoId: "vdKeOul-CWM",
        endTime: 322,
      },
      {
        id: "buccal-cavity-quiz",
        time: 3,
        kind: "textResponse",
        short: true,
        title: "Teaching Buccal Cavity",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`

    ![mouth buccal cavity](/learning-items/grade7/buccal-cavity-mouth.jpeg)

    Imagine you were teaching the meaning of the word _Buccal Cavity_ to a friend.

    What would you say to make your friend understand and remember the meaning of the word Buccal Cavity?`,
        hacks: {
          afterBody: {
            preface: "Here is what Prabsimar, another student who took this quiz, said:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            Buccal means mouth.

            One way I remember Buccal is by turning it into the word Bhook-al.

            Bhook in hindi means hunger, and we eat food through our mouth. This helps me remember that Buccal is mouth.

            Another way in which I remember the word Buccal is by thinking of a company called Buccal Protect.

            This company is like Colgate and makes toothpaste. Since we use toothpaste to clean our teeth and mouth, I remember that Buccal is linked with mouth.`,
              },
            ],
          },
        },
      },
      {
        id: "mouth-or-stomach",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Mouth Or Stomach?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![digestive system quiz](/learning-items/grade7/man-eating.jpg)

      Where does digestion begin?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt2",
            text: "Mouth",
          },
          {
            id: "opt1",
            text: "Stomach",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. The food enters our body through the mouth and the saliva in the mouth starts converting Starch into Simple Sugars. Thus digestion begins in the mouth.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. The saliva in the mouth converts Starch (which can be found in foods like pasta) into simple sugars. These simple sugars can be used to provide energy to our body.",
          },
        ],
      },
      {
        id: "digestive-system-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Digestive System Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      Look at the arrow in the image below. Which part of the digestive system is the arrow pointing towards?

      ![digestive system quiz](/learning-items/grade7/digestive-system-quiz-2.jpeg)`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Stomach",
          },
          {
            id: "opt2",
            text: "Buccal Cavity",
          },
          {
            id: "opt3",
            text: "Oesophagus",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. The arrow is pointing to the oesophagus or the food pipe. This pipe connects the mouth to the stomach.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is incorrect. Buccal means mouth. The arrow is pointing to the oesophagus or the food pipe. This pipe connects the mouth to the stomach.",
          },
          {
            answerSet: ["opt3"],
            response: "__Correct__. The arrow is poiting to the oesophagus or the foodpipe.",
          },
        ],
      },
      {
        id: "stomach-function-quiz",
        time: 3,
        kind: "textResponse",
        short: true,
        title: "What Happens In The Stomach?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`

    ![stomach](/learning-items/grade7/stomach.jpeg)

    Imagine you were creating a final exam question on the topic of stomach.

    What question would you ask and what would the answer to that question be?`,
        hacks: {
          afterBody: {
            preface: "Here is what Sid, another student who took this quiz, said:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            I would ask: What is the function of stomach inside our body?

            Here is the correct answer. The stomach is like a mixie which churns the food.

            The stomach also has HCl or Hydrochloric Acid which kills harmful bacteria in the food.

            Also, it releases digestive juices, which convert the proteins in the food into simpler substances.`,
              },
            ],
          },
        },
      },
      {
        id: "draw-what-you-have-learned",
        kind: "imageResponse",
        time: 10,
        title: "Draw What You Have Learned",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![sunil sir video](/learning-items/grade7/video-sunil.jpeg)

    We discussed a lot of new ideas while talking to Mr. Sunil in the video at the start of this chapter.

    Use a _pencil and paper_ to draw a picture that shows everything you learned from that video.

    Then take a photo of that drawing from your phone and upload it here.`,
        hacks: {
          afterBody: {
            show: "locked",
            preface:
              "The picture below was made and uploaded by Kshirja, a student of Class 6 at Ahlcon International School.",
            feedbackImagePath: "/learning-items/grade7/human-digestive-system-kshirja.jpg",
          },
        },
      },
      {
        id: "saliva-and-starch",
        time: 1,
        kind: "image",
        title: "Saliva And Starch",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Starch can be found in foods like pasta. It is sometimes known as a complex sugar.

    Saliva can begin the process of digestion by turning the complex sugars in Starch into simple sugars. Our body can then use these simple sugars for energy.
    `,
        imagePath: "/learning-items/grade7/saliva-breaks-starch-into-sugar.jpeg",
      },
      {
        id: "milk-teeth",
        time: 1,
        kind: "image",
        title: "What Are Milk Teeth?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Milk teeth are the set of teeth that grow during the first year of the life of the baby.

    One reason why milk teeth are called milk teeth is that they resemble the colour of milk.
    `,
        imagePath: "/learning-items/grade7/milk-teeth.jpeg",
      },
      {
        id: "teeth-type-and-decay",
        time: 3,
        kind: "video",
        title: "Types Of Teeth",
        instructions: dedent`
    Humans have four types of teeth: _Incisors, Canines, Pre-Molars and Molars_.

    Watch this video to find out more about them.

    Also, the teacher in this video talks really fast. So if you have trouble understanding her, click the __cc button__ on the video. This way you will be able to read what the teacher is saying.
    `,
        videoId: "b5CPd1_r03s",
        startTime: 58,
        endTime: 156,
      },
      {
        id: "tongue",
        kind: "video",
        time: 3,
        title: "How Your Tongue Works",
        instructions: dedent`
      Your tongue can taste a few different flavours like sweet (ice cream), sour (lemon), salty (potato chips), bitter (coffee) and umami (soy sauce).

      This video will show you how your tongue does all that.

      Also, the teacher in this video talks really fast. So if you have trouble understanding her, click the __cc button__ on the video. This way you will be able to read what the teacher is saying.
    `,
        videoId: "C4rdqXXzPGU",
        endTime: 198,
      },
      {
        id: "tongue-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Tongue Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      The tongue helps in mixing food with saliva.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "__Correct__.  ",
          },
          {
            answerSet: ["opt2"],
            response: "Tongue does help in mixing saliva with the food.",
          },
        ],
      },
      {
        id: "stomach-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Let Us Talk About The Stomach",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![human stomach](/learning-items/grade7/stomach3.jpeg)

      We learned earlier in the chapter that after the Oesophagus, the food comes to the Stomach.

      The stomach is like a mixie or blender, where the food mixes with digestive juices and _______ acid.

      Can you tell us the name of the acid?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Amino Acid",
          },
          {
            id: "opt2",
            text: "Hydrochloric Acid",
          },
          {
            id: "opt3",
            text: "Titanic Acid",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Proteins are converted into simpler substances called amino acids in the small intestine.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Stomach releases Hydrochloric Acid, which kills the harmful bacteria in the food. The stomach also releases digestive juices which break down proteins into simpler substances.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is not correct. Titanic acid is a chemical made from the element Titanium, which does not exist in the stomach. ",
          },
        ],
      },
      {
        id: "ingestion-digestion-egestion",
        time: 1,
        kind: "image",
        title: "Ingestion, Digestion, Egestion",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Ingestion, simply put, is eating. The word _Ingestion_, reminds me of the word _Insert._ When we eat, we are ingesting (or inserting) food in our body.

    Digestion is the process of breaking food down into smaller substances that can be used by the body.

    Egestion is the removal of faecal matter (poop) from the body.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/ingestion-digestion-egestion-gif3.gif)

    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      /*{
    id: 'ingestion-starfish',
    kind: 'video',
    time: 2,
    title: 'Ingestion in Starfish',
    instructions: dedent`
      Here is a video that shows how starfish eat.

      A starfish pops out its stomach through its mouth to eat its food.
    `,
    videoId: 'vw0apxiWzQ8',
  }, */ {
        id: "egestion",
        time: 1,
        kind: "image",
        title: "What is Egestion?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Egestion is the process of removing faecal matter (or poop) from the body.
    `,
        imagePath: "/learning-items/grade7/egestion.jpeg",
      },
      /*{
    id: 'egestion-exit',
    time: 1,
    kind: 'image',
    title: 'A way to remember Egestion',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When I think of the word, _Egestion_, I think of the word _Exit_.

    Exit means for us to leave or go out of a building.

    Egestion means for poop to leave or exit our body.
    `,
    imagePath: '/learning-items/grade7/egestion-exit.jpeg'
  }, */ {
        id: "alimentary-canal",
        time: 1,
        kind: "image",
        title: "What Is The Alimentary Canal?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Alimentary means _food or nourishment_.

    Canal means _path or passage_.

    Alimentary Canal is the path through which the food passes in our body. It includes the mouth, oesophagus, stomach, small intestine, and large intestine.
    `,
        imagePath: "/learning-items/grade7/alimentary-canal-3.jpeg",
      },
      /*{
    id: 'how-to-remember-alimentary-canal',
    time: 1,
    kind: 'image',
    title: 'A way to remember Alimentary Canal',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    In 2013, a book named Gulp was released. The sub-title of the book is _Adventures on the Alimentary Canal_.

    I use the image on the cover of this book to remember the meaning of Alimentary Canal.

    Alimentary Canal is path along which the food passes in our body. It includes the mouth, oesophagus, stomach, small intestine, large intestine, rectum, and anus.
    `,
    imagePath: '/learning-items/grade7/alimentary-canal-food-passage.jpeg'
  }, */ {
        id: "teach-a-friend",
        kind: "textResponse",
        time: 5,
        short: true,
        title: "Teach A Friend",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Imagine a friend of yours is struggling to remember the definition of Alimentary Canal.

    What will you tell him/her that will help them remember the definition of Alimentary Canal? Write your answer in the box below.`,
        hacks: {
          afterBody: {
            preface: "Here are responses from other students who answered this quiz:",
            //show: 'locked',
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            मान लो कि आपकी बॉडी में एक canal (or path) है जिसके through फ़ूड पास करता है.

            Alimentary Canal is the path through which the food travels through in your body. It includes the mouth, oesophagus, stomach, small intestine and large intestine.`,
              },
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            Alimentary Canal sounds like Elementary School - Elementary school is when our journey in school happens, and Alimentary Canal is where the journey of food occurs.`,
              },
            ],
          },
        },
      },
      {
        id: "chapter-2-video-small-intestine",
        kind: "video",
        time: 3,
        title: "Small Intestine And Large Intestine",
        instructions: dedent`
      Let us finish watching the remainder of this video with Mr. Sunil.

      We will now follow the food as it moves from the stomach to the small intestine and then to the large intestine. In the end we will watch the food become poop.
    `,
        videoId: "vdKeOul-CWM",
        startTime: 322,
      },
      {
        id: "bile-small-intestine",
        time: 1,
        kind: "image",
        title: "Bile And The Small Intestine",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Liver produces Bile.

    Bile is a yellowish-green liquid that is temporarily stored in the Gall Bladder. It is eventually send to the Small Intestine where it helps in the digestion of fats.

    __Note:__ The reason why bile is stored in the gall bladder is because liver produces bile continuously, but we only need bile after we have consumed some food. Thus, the excess bile is stored in the gall bladder. After we eat food, bile from the gall bladder is sent to the small intestine to help with digestion.

    `,
        imagePath: "/learning-items/grade7/liver-bile-gall-bladder-small-intestine-fats2.jpeg",
      },
      {
        id: "no-bile",
        time: 1,
        kind: "image",
        title: "What If We Had No Bile?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Our body needs bile to digest fats.

    If we our liver does not produce any bile then the fats in our food would not be digested, and would be passed in our poop. The indigestible fats will then give our poop a white, oily look.
    `,
        imagePath: "/learning-items/grade7/Steatorrhea-white-poop-no-bile.jpeg",
      },
      {
        id: "large-intestine-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Function Of Large Intestine",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![human stomach](/learning-items/grade7/large-intestine.jpeg)

      What is the function of large intestine?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Absorb water from undigested food",
          },
          {
            id: "opt2",
            text: "Produce bile",
          },
          {
            id: "opt3",
            text: "Store poop",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. One of the functions of large intestine is to absorb water and salts from the undigested food.",
          },
          {
            answerSet: ["opt2"],
            response: "This is incorrect. Bile is produced in the liver.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is __also correct__. Faecal matter (or poop) is stored in rectum which is part of the large intestine.",
          },
        ],
      },
      {
        id: "digestive-system-recap",
        time: 1,
        kind: "image",
        title: "Digestive System Recap",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Based on studying this entire chapter, here is a summary of how our food gets digested:

    _Saliva_
     - breaks starch into simple sugars

    _Stomach_
     - HCl kills harmful bacteria
     - digestive juices break down proteins

    _Small Intestine_
     - bile breaks down fats
     - pancreatic juice
        -  turns carbohydrates into simple sugars
        - turns fats into fatty acids
        - turns proteins into amino acids
    `,
        imagePath: "/learning-items/grade7/digestive-system-summary-recap.jpeg",
      },
      {
        id: "digestion-in-cows",
        kind: "video",
        time: 1,
        title: "How Cows Digest Grass?",
        instructions: dedent`
      When cows eat, they do not chew the grass completely, but quickly swallow the grass and store it in a special part of their stomach called __rumen__.

      In the rumen, the food is only partially digested. This partially digested food is called __cud__.

      Then the cows do something incredible.

      They bring the cud from the rumen (or stomach) back to their mouth in small lumps so they can chew the food proeperly. This process is called __rumination__ and these animals are called __ruminants__.

      ---
      Note: The teacher in this video talks really fast. So if you have trouble understanding him, click the __cc button__ on the video. This way you will be able to read what the teacher is saying.
    `,
        videoId: "svw5KA8YlAA",
        startTime: 40,
        endTime: 81,
      },
      {
        id: "chewing-cud",
        kind: "video",
        time: 1,
        title: "How Do Cows Eat?",
        instructions: dedent`
      If you see this video closely at 0:18, you will notice that the cow brings the cud back to her mouth to chew it again.
    `,
        videoId: "n-cOASb3e_Y",
      },
      {
        id: "summary-video",
        kind: "video",
        time: 7,
        title: "Bonus - Revision Video",
        instructions: "This video will help you revise the entire chapter.",
        videoId: "zr4onA2k_LY",
        locked: true,
      },
    ],
  },
  {
    id: " 3",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter3-thumbnail.png",
    title: "Fibre to Fabric",
    description:
      "Learn Chapter 3, Fibre To Fabric, from the Class 7 NCERT science book by answering questions, viewing solutions and watching videos.",
    items: [
      {
        id: "chapter-3-video",
        kind: "video",
        time: 5,
        title: "From Sheep Hair to Sweaters",
        instructions: dedent`
      In this video we interview a sheep farmer who raises 200 sheep.

      Watch to see how sheep hair are converted into woollen sweaters.
    `,
        videoId: "1Iy2Yg92Sa4",
      },
      {
        id: "green-plants-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Scouring Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      What does the word Scouring mean?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Cleaning sheep hair",
          },
          {
            id: "opt2",
            text: "Rolling fibre into yarn",
          },
          {
            id: "opt3",
            text: "Searching for something",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "__Correct__. Scouring means to clean grease and dust from sheep hair.",
          },
          {
            answerSet: ["opt2"],
            response: "No, this is not correct. Rolling fibre into yarn is called _Spinning_.",
          },
          {
            answerSet: ["opt3"],
            response:
              "Actually, this is __also correct.__ The word _scouring_ can also mean to search for something. Like scouring the internet, or searching for something on the internet.",
          },
        ],
      },
      {
        id: "most-surprising-thing",
        kind: "textResponse",
        time: 3,
        short: true,
        title: "Most Surprising Thing",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![saprotroph mushrooms](/learning-items/grade7/interview-with-sheep-farmer.jpeg)

    I hope you watched the video with Mr. Gulzar in the beginning of this chapter.

    What was the most surprising thing you learned in that video?

    Write your answer in the box below.`,
      },
      {
        id: "fleece-means-hair",
        time: 1,
        kind: "image",
        title: "Fleece means Hair",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Fleece, simply put, means hair. I am sure you have heard this nursery rhyme:

    _Mary had a little lamb, her fleece was white as snow._

    The word _fleece_ refers to the hair of lamb.`,

        imagePath: "/learning-items/grade7/fleece-means-hair.jpeg",
      },
      {
        id: "what-does-rearing-mean",
        time: 1,
        kind: "image",
        title: "What does rearing mean?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Rearing means to raise or to take care of someone.

    _Child rearing_ is the act of raising a child.

    _Sheep rearing_ is the act of raising sheep. `,

        imagePath: "/learning-items/grade7/rearing-means-to-raise.jpeg",
      },
      {
        id: "shearing",
        kind: "video",
        time: 3,
        title: "What is Sheep Shearing?",
        instructions: dedent`
      This is a video os a sheep farmer in New Zealand cutting the hair of his sheep using an electric hair cutter.

      Shearing is the process by which the woollen fleece (hair) of an animal like sheep is cut off.`,
        videoId: "WYEASlmt3vc",
        startTime: 15,
      },
      {
        id: "animals-that-yield-wool",
        time: 1,
        kind: "image",
        title: "Animals that yield wool",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Several, animals all around the world are raised for their wool. These include:

     - Yak in Tibet
     - Angora Goats in J&K
     - Llamas in South America
     - Alpacas in South America`,

        imagePath: "/learning-items/grade7/animals-that-yield-wool.jpeg",
      },
      {
        id: "wool-quiz",
        kind: "multipleChoiceResponse",
        time: 2,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Which of the following animal does not yield wool?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Yak",
          },
          {
            id: "opt2",
            text: "Camel",
          },
          {
            id: "opt3",
            text: "Goat",
          },
          {
            id: "opt4",
            text: "Woolly Dog",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "That is incorrect. Yaks are raised in Tibet and their thick hair can be used to make wool.",
          },
          {
            answerSet: ["opt2"],
            response:
              "That is incorrect. The fur or hair on the body of camels can be used as wool.",
          },
          {
            answerSet: ["opt3"],
            response:
              "That is incorrect. Angora goats found in Jammu and Kashmir grow hair that can be used to make shawls.",
          },
          {
            answerSet: ["opt4"],
            response:
              "__Correct__. Woolly Dogs are an extinct animal. That means, they no longer exist. When they were alive, they were found in North America, and their fur was used to make blankets.",
          },
        ],
      },
      {
        id: "do-sheep-feel-cold-after-they-are-sheared",
        time: 1,
        kind: "image",
        title: "Do sheep feel cold after shearing?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Yes.

    The sheep grow hair not because we need sweaters, but because the sheep need hair to protect themselves from cold.

    So sheep can feel cold after they are sheared; specially if they are sheared in winters. In some cases, the sheep can even die of cold.`,

        imagePath: "/learning-items/grade7/do-sheep-feel-cold-after-they-are-sheared.jpeg",
      },
      {
        id: "draw-what-you-have-learned",
        kind: "imageResponse",
        time: 10,
        title: "Draw what you have learned",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here are some of the steps needed to produce sweaters from the hair of a sheep:

    _Shearing, Scouring, Colouring, Spinning, Weaving_

    Use a _pen and paper_ to draw a picture that shows each one of these steps.

    Then take a photo of the drawing from your phone and upload it here.`,
      },
      {
        id: "what-is-sericulture",
        time: 1,
        kind: "image",
        title: "What is Sericulture?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    _Seri_ means silk. _Culture_ means to raise or grow something.

    To remember the word Sericulture, I think of the word _Agriculture_, which is the process of raising crops.

    Thus, Sericulture is the process of raising silkworms to produce silk.`,

        imagePath: "/learning-items/grade7/sericulture-raising-silkworms.jpeg",
      },
      {
        id: "process-of-making-silk",
        kind: "video",
        time: 3,
        title: "Process of Making Silk",
        instructions: dedent`
      Here is the process of making silk:
       - Female silk moths (or flying insects) lays thousands of eggs.
       - The eggs turn into larvae (or the baby version of an insect). These larvae are called caterpillars or silkworms.
       - The silkworms eat mulberry leaves for about 25-30 days.
       - Silkworm begin to secrete a fibre and covers itself in that fibre. This covering is called a cocoon.
       - The silkworm inside the cocoon develops into a silk moth (or flying insect).
       - To obtain silk, the cocoons are boiled. This kills the silkworm inside and prevents it from turning into a moth and coming out of the cocoon.
       -  Silk fibres from cocoons are removed and then spun together to make silk thread.
       `,
        videoId: "eqFm_7KyfHI",
        endTime: 211,
      },
      {
        id: "larvae-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Silkworm Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Silkworm is (a) a caterpillar, (b) a larva.

    Choose the correct option.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "a",
          },
          {
            id: "opt2",
            text: "b",
          },
          {
            id: "opt3",
            text: "both a and b",
          },
          {
            id: "opt4",
            text: "neither a nor b",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "The silkworm is a caterpillar. But it is also called a larva. Larva means an immature or young form of an insect. The plural of larva is larvae.",
          },
          {
            answerSet: ["opt2"],
            response:
              "The silkworm is a larva. Larva means an immature or young form of an insect. The plural of larva is larvae. But the silkworm is also called a caterpillar.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. The silkworm is both a caterpillar and a larva. Larva means an immature or young form of an insect. The plural of larva is larvae.",
          },
          {
            answerSet: ["opt4"],
            response: "This is incorrect.",
          },
        ],
      },
      {
        id: "silk-moth-laying-eggs",
        kind: "video",
        time: 1,
        title: "The Silk Moth laying Eggs",
        instructions: dedent`
      The first step in the making of silk involves the silk moth laying eggs.

      This video shows that process.
       `,
        videoId: "8k6gKTZaJwA",
        endTime: 36,
      },
      {
        id: "silkworms-emerging-from-eggs",
        kind: "video",
        time: 2,
        title: "Silkworms emerging from Eggs",
        instructions: dedent`
      1-2 weeks after the silk moth has laid eggs, the eggs hatch into silkworms or caterpillars.

      This video shows the process of caterpillars emerging from eggs.
       `,
        videoId: "yU1_CdMjam8",
      },
      {
        id: "silkworms-eat-mulberry-leaves",
        kind: "video",
        time: 1,
        title: "Silkworms eat Mulberry Leaves",
        instructions: dedent`
      The silkworms (or caterpillars) love to eat mulberry leaves. They eat day and night, and increase their body size 10,000 times.

      This video shows the slow process of silkworms eating mulberry leaves.
       `,
        videoId: "yPcKWW-wewI",
      },
      {
        id: "silkworms-spinning-a-cocoon",
        kind: "video",
        time: 1,
        title: "Silkworms Spin a Cocoon",
        instructions: dedent`
      The silkworms (or caterpillars) secrete a silk fibre, and cover themselves in that fibre by making a cocoon.

      This video is running in fast forward mode. It shows 11 hours of recorded video tape in just 1 minute.
       `,
        videoId: "NPVEug_uFZk",
        startTime: 10,
        endTime: 70,
      },
      {
        id: "why-are-cocoons-boiled",
        kind: "video",
        time: 4,
        title: "Why are Cocoons Boiled?",
        instructions: dedent`
      A few weeks after the caterpillar has spun a cocoon, it develops into a silk moth (or a flying insect). They emerge from the cocoon by braking the cocoon and the silk thread.

      To prevent the moth from breaking the delicate thread, the cocoons are boiled. This kills the moth inside. The undamaged silk thread can then be removed from the cocoon.

      The video below shows what would happen if the cocoons were __not__ boiled — in that case the silk moth would emerge from the cocoon. This video running in fast forward mode. It shows 16 minutes of recorded video tape in 4 minutes.
       `,
        videoId: "ClXjhUmJf4w",
      },
      {
        id: "teach-a-friend",
        kind: "textResponse",
        time: 10,
        title: "Teach a Friend",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Imagine a friend of yours is struggling to understand the process with which silks are made.

    What will you tell him/her that can help them understand that enitre process? Write your answer in the box below.`,
      },
      {
        id: "bonus-sericulture-video",
        kind: "video",
        time: 2,
        title: "Revision of Sericuture",
        instructions: dedent`
      This video will help you revise the sericulture process.
      `,
        videoId: "77ktNSPFbwQ",
        locked: true,
      },
    ],
  },
  {
    id: " 4",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter4-thumbnail.png",
    title: "Heat",
    description:
      "Watch videos to learn Chapter 4, Heat, from the NCERT science book in Class 7. Try questions and answers on conduction, convection and radiation.",
    items: [
      {
        id: "chapter-4-video",
        kind: "video",
        time: 4,
        title: "Difference Between Conduction And Convection",
        instructions: dedent`
      It can be hard to understand the difference between conduction and convection. This video explains the difference clearly.

      We begin by talking about something called _Heat Transfer_.

      If we heat a pot on a stove, the heat will move from the bottom of the pot to the handles of the pot. This is heat transfer. Heat transfer means that heat flows from a body with higher temperature to a body with lower temperature.

      Both Conduction and Convection are types of heat transfer.

      Conduction is heat transfer in solids (example when heating a pot).

      Convection is heat transfer in liquids and gases (example when heating water).

    `,
        videoId: "HQH_j28_FK4",
      },
      {
        id: "draw-the-difference",
        kind: "imageResponse",
        time: 5,
        title: "Draw What You Have Learned",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Use a _pen and paper_ to draw a picture that describes the differences between Conduction and Convection.

    Then take a photo of the drawing from your phone and upload it here.`,
        hacks: {
          afterBody: {
            show: "locked",
            preface:
              "The picture below was made and uploaded by Koushiki, a student of Class 6 at Ahlcon International School. ",
            feedbackImagePath:
              "/learning-items/grade7/difference-between-conduction-and-convection.jpeg",
          },
        },
      },
      {
        id: "conduction-solids",
        time: 1,
        kind: "image",
        title: "Conduction Happens In Solids",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A cooking pan is a solid substance. If we zoom into it, we will find that it is made up of particles that are tightly packed.

    When we heat the bottom of the pan, the particles at the bottom start vibrating. These vibrating particles bump into the particles next to them, causing them to vibrate also.

    This is how heat is transfered in solids. And the transfer of heat in solids is called conduction.
   `,
        imagePath: "/learning-items/grade7/heat-transfer-conduction.jpg",
      },
      {
        id: "wooden-spoonquiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Conduction Or Convection?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     ![ice cream wooden spoon conduction](/learning-items/grade7/ice-cream-cold-spoon-conduction.jpg)

      A wooden spoon is dipped in a cup of ice cream. Its other end:`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "becomes cold by conduction",
          },
          {
            id: "opt2",
            text: "becomes cold by convection",
          },
          {
            id: "opt3",
            text: "does not become cold",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`__Correct__.

        Everything has some heat energy. The wooden spoon has some heat energy. The ice cream, strangely, also has some heat energy. Ice cream has very little heat energy, but it has some.

        In this example, the wooden spoon has more heat energy than the ice cream, so heat will transfer (or conduct) from the spoon to the ice cream. This will make the wooden spoon have less heat. In other words the wooden spoon will become cold.

        And since the spoon is solid, the process of transfer of heat in the spoon will be conduction.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`The spoon will become cold, but the process is __not__ convection. The process is conduction.

        You should know that everything has some heat energy. The wooden spoon has some heat energy. The ice cream, strangely, also has some heat energy. Ice cream has very little heat energy, but it has some.

        In this example, the wooden spoon has more heat than the ice cream, so heat will transfer (or conduct) from the spoon to the ice cream, making the wooden spoon have less heat. In other words the wooden spoon will become cold.

        And since the spoon is a solid, the process of transfer of heat in the spoon will be conduction.`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`This is not correct.

        Everything has some heat energy. The wooden spoon has some heat energy. The ice cream also has some heat energy. Ice cream has very little heat energy, but it has some.

        In this example, the wooden spoon has more heat than the ice cream so heat will transfer (or conduct) from the spoon to the ice cream, making the wooden spoon have less heat. In other words the wooden spoon will become cold.`,
          },
        ],
      },
      {
        id: "iron-ball-in-water-quiz",
        kind: "multipleChoiceResponse",
        time: 2,
        title: "Heat Transfer Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![iron ball in water quiz](/learning-items/grade7/dropping-iron-ball-in-water.jpeg)

    An iron ball at 40°C is dropped in water which is also at 40°C. The heat will`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "flow from iron ball to water",
          },
          {
            id: "opt2",
            text: "not flow at all",
          },
          {
            id: "opt3",
            text: "flow from water to iron ball",
          },
          {
            id: "opt4",
            text: "increase the temperature of both",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. For heat to flow or transfer, there needs to be a difference in temperature. Since both water and the iron ball are at 40°C, no heat will transfer from the ball to the water or from the water to the ball.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. For heat to flow or transfer, there needs to be a difference in temperature. Since both water and the iron ball are at 40°C, no heat will transfer from the ball to the water or from the water to the ball.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is incorrect. For heat to flow or transfer, there needs to be a difference in temperature. Since both water and the iron ball are at 40°C, no heat will transfer from the ball to the water or from the water to the ball.",
          },
          {
            answerSet: ["opt4"],
            response:
              "This is incorrect. The temperature of water and the iron ball cannot magically increase. There needs to be a new source of heat for that to happen. Since both the water and the iron ball are at 40°C, no heat will transfer from the ball to the water or from the water to the ball. ",
          },
        ],
      },
      {
        id: "conductors-insulators",
        kind: "video",
        time: 2,
        title: "Conductors and Insulators",
        instructions: dedent`
      The experiment in this video will show that metal is a conductor. A conductor is a substance that allows heat to flow through itself easily.

      Also, this video will show that wood and plastic are insulators. An insulator is a substance that does not allow heat to pass through it easily.
    `,
        videoId: "nOcT53wd1BM",
      },
      {
        id: "stainless-steel-pan-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Stainless Steel Pot Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![stainless steel pot copper bottom quiz](/learning-items/grade7/stainless-steel-pot-copper-bottom-quiz.jpeg)

    Stainless steel pots are usually provided with copper bottoms. The reason for that could be that:`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "copper bottom makes the pot more durable",
          },
          {
            id: "opt2",
            text: "such pots appear colourful",
          },
          {
            id: "opt3",
            text: "copper is better conductor of heat than stainless steel",
          },
          {
            id: "opt4",
            text: "copper is easier to clean than stainless steel",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is incorrect. Copper bottoms do not make the pot more durable.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is not correct. Copper bottoms are not added to stainless steel pots to make them more beautiful.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. Copper is a better conductor of heat that stainless steel. That means that copper allows heat to flow more easily than stainless steel. Therefore, pots with copper bottoms cook food much faster than those with stainless steel bottoms.",
          },
          {
            answerSet: ["opt4"],
            response: "This is incorrect. Copper and stainless steel are equally easy to clean.",
          },
        ],
      },
      {
        id: "paper-metal-wood-experiment-video",
        kind: "video",
        time: 1,
        title: "Amazing Conduction Experiment (Optional)",
        instructions: dedent`
      In this experiment, the teacher wraps a piece of paper around some __wood__ and places it over a fire. The paper burns.

      But then, the teacher wraps another piece of paper around __metal__ and places it over the same fire. The paper does not burn.

      __Why does this happen?__ This happens because, metal can conduct heat from the fire pretty quickly. Thus the paper never gets above the temperature needed to burn. But wood does not conduct heat very quickly. So the temperature increases quickly and burns the paper.

      This experiment shows that metal is a much better conductor of heat than wood.
    `,
        videoId: "tDs4cFOqTdM",
        startTime: 1365,
        endTime: 1410,
      },
      {
        id: "convection-land-sea-breeze",
        time: 1,
        kind: "image",
        title: "Convection Example: Sea Breeze, Land Breeze",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Earlier in this chapter, we saw that heat transfer in a liquid or gas is called __Convection__. One example of convection is the breeze (or wind) that blows in coastal areas.

    During the day, air above land gets heated faster than the air over sea. And hot air rises — we have seen this in hot air balloons. When the hot air above land expands and rises, the cool air from the sea takes its place. This is called __sea breeze__.

    In this example, transfer of heat is happening through air, and air is a gas. Thus, this is an example of convection.

    ![sea breeze day](/learning-items/grade7/sea-breeze-day.jpeg)

    At night the reverse process happens.

    During night time, water cools down more slowly than land. Thus the air above water expands and rises. When this happens the air from land moves in to take its place. This is called __land breeze__.
   `,
        imagePath: "/learning-items/grade7/land-breeze-night.jpeg",
      },
      {
        id: "land-breeze-sea-breeze-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![land breeze sea breeze quiz](/learning-items/grade7/land-breeze-sea-breeze-quiz.jpeg)

    Land breeze blows during _____. Sea breeze blows during _____.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "day; night",
          },
          {
            id: "opt2",
            text: "night; day",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Land Breeze (or wind from land to sea) blows during night. Sea breeze (or wind from sea to land) blows during day.",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct.__ Land Breeze blows during night. Sea breeze blows during day.",
          },
        ],
      },
      {
        id: "convection-water-heater",
        time: 1,
        kind: "image",
        title: "Convection Example: Water Heater",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Water in a heater transfers heat due to __Convection.__

    The flame or source of heat in a water heater is at _the bottom of the heater_.

    The water at the bottom of the heater gets heated first and rises up; and the cold water from the top of the heater sinks to the bottom.

    In this example, the heat is transferring through water, which is a liquid. Thus the process responsible for heat transfer is Convection.

    Now engineers take advantage of this process. If we look inside a heater, we will find that the pipe used to take water away from this heater and to our taps is located at the top of the heater. This is because all the hot water in the heater rises to the top.

    Also new, cold water is added to the heater from the bottom of the heater. This is done so the cold water does not mix with the hot water at the top.
   `,
        imagePath: "/learning-items/grade7/water-heater-convection.jpeg",
      },
      {
        id: "convection-hot-air-in-car",
        time: 1,
        kind: "image",
        title: "Convection Example: Hot Air In Car",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Another example of convection can be seen on a hot day next to a car.

    When we open a car door on a hot day, we do not enter the car immediately. We wait for the hot air from inside the car to escape.

    In this example hot air is rising. And thus heat is transferring through air, which is a gas. Thus, the process responsible for heat transfer is convection.

    _Note:_ After opening the car door, if we look on the ground, we can sometimes see the rising hot air’s shadow or turbulence.
   `,
        imagePath: "/learning-items/grade7/convection-heating-a-car-summer-day.jpg",
      },
      {
        id: "radiation-sun-heat",
        time: 2,
        kind: "image",
        title: "Radiation Example: Heat From The Sun",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    On page 43, our science books says this: _“From the sun, the heat comes to us by another process known as radiation.”_ Let us think about this sentence.

    ![sun heat radiation science book](/learning-items/grade7/class7-science-book-radiation.jpeg)

    The heat we receive from the sun is due to radiation. Here is why the heat from the sun is __not__ due to conduction or convection.

    Conduction is heat transfer in solids, like heating pots or pans in the kitchen. And convection is heat transfer in gases or liquids, like boiling water.

    Radiation does not need a medium like solids, liquids or gases. It can take place in the _presence or absence_ of a medium.

    For example the heat from the sun travels to the earth through space (which is empty, and not a medium) and then just before it reaches the earth it goes through the atmosphere (which is a gas, and definitely a medium).

    Heat transfer from radiation can happen with or without a medium.

    ![sun heat radiation](/learning-items/grade7/sun-heat-radiation.jpeg)

    Oh and one more thing. We know that sun can transfer heat through radiation. But Sun is not alone in that group. Everything that has some temperature radiates.

    You radiate; the sun radiates; the light bulb radiates; your phone, cat and dog also radiate.

    Things with greater temperature generally radiate more.
   `,
        imagePath: "/learning-items/grade7/our-body-radiates-cats-radiate-dogs-radiate.jpeg",
      },
      {
        id: "radiation-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    No medium is required for transfer of heat by the process of _________.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "conduction",
          },
          {
            id: "opt2",
            text: "convection",
          },
          {
            id: "opt3",
            text: "radiation",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Conduction requires solids to transfer heat. Example, heating a pan.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is not correct. Convection requires liquids or gases to transfer heat. Example heating air or boiling water.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. Radiation can transfer heat in the presence or absence of a medium. Example, heat from the sun.",
          },
        ],
      },
      {
        id: "radiation-example-fire",
        time: 1,
        kind: "image",
        title: "Radiation Example — Heat From Fire",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    When we sit in front of a fire, we feel warm. That is due to __radiation__.

    When I said this in a class, one student asked, _"why is heat from fire not conduction or convection?"_ Let us think about this together.

    ---

    If we put a kettle on top of the fire, the kettle will get hot. Since the kettle is solid, the process here is __conduction__.

    If we put our hand above the kettle, we would feel the hot air rising. Since air is a gas, heat transfer through air is __convection__.

    Now this fire will also heat the air around it (in addition to the hot air rising from the fire). And we may feel a bit of that warm air. The process responsible here is __also convection__.

    Finally, imagine that a cool wind is blowing around the fire. Even then, we will still experience heat from the fire. This heat transfer is because of __radiation__.

    Everything that has some temperature transfers heat through radiation.
   `,
        imagePath: "/learning-items/grade7/conduction-convection-radiation.jpeg",
      },
      {
        id: "label-diagram-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Conduction, Convection Or Radiation?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![label diagram conduction convection radiation quiz](/learning-items/grade7/label-diagram-conduction-convection-radaition-quiz.jpeg)

    In the image above, heat transfer is happening at points 1, 2 and 3.

    Identify whether heat is being transferred by conduction, convection or radiation at those 3 points.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "1-conduction, 2-convection, 3-radiation",
          },
          {
            id: "opt2",
            text: "1-convection, 2-conduction, 3-radiation",
          },
          {
            id: "opt3",
            text: "1-conduction, 2-convection",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        This is not correct.

        Water is a liquid. And within water, heat trasfers through convection. Since (1) is labelled conduction, this option is not correct.

        Here is the correct response.

        ![label diagram conduction convection radiation solution](/learning-items/grade7/label-diagram-conduction-convection-radaition-solution.jpeg)
        `,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        __Correct__. In this example heat transfers from the flame to the pot. And then from the pot to the water.

        __1) Convection__ - Since water is a liquid, heat transfer within water is through convection.

        __2) Conduction__ - Since the pot is a solid, heat transfer within the pot is through conduction.

        __3) Radiation__ - From burner to pot is radiation. Everything that has some temperature transfers heat through radiation.

        ![label diagram conduction convection radiation solution](/learning-items/grade7/label-diagram-conduction-convection-radaition-solution.jpeg)

        Also, as the water heats up and evaporates, it heats the air above and around it. This transfer of heat through air is called Convection.

        ![convection hot air from pan](/learning-items/grade7/convection-hot-air-from-pan.jpeg)

        Finally, if we stand next to the stove, we will experience some heat from the flame. This heat transfer happens through radiation.

        ![radiation heat received from fire](/learning-items/grade7/radiation-heat-received-from-fire.jpeg)
        `,
          },
          {
            answerSet: ["opt3"],
            response: dedent`
        Option (1) and (2) are not correct. And option (3) is missing. Here is the correct answer.

        __1) Convection__ - Since water is a liquid, heat transfer within water is through convection.

        __2) Conduction__ - Since the pot is a solid, heat transfer within the pot is through conduction.

        __3) Radiation__ - From burner to pot is radiation. Everything that has some temperature transfers heat through radiation.

        ![label diagram conduction convection radiation solution](/learning-items/grade7/label-diagram-conduction-convection-radaition-solution.jpeg)

        Also, if we stand next to the stove, we will experience some heat from the flame. This heat transfer happens through radiation.

        ![radiation heat received from fire](/learning-items/grade7/radiation-heat-received-from-fire.jpeg)
        `,
          },
        ],
      },
      {
        id: "what-is-clinical-thermometer",
        time: 1,
        kind: "image",
        title: "What Is A Clinical Thermometer?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A clinical thermometer is used to measure the temperature of our body. Doctors use it in their clinics and we use it in our homes.

    This thermometer can measure a range of temperatures: from 35°C to 42°C. The normal temperature of the human body is around 37°C.

    By the way, when we read 37°C, we say 37 degree Celcius.

    Above 42°C, death can occur. Below 35°C, we can experience intense shivering, loss of movement in fingers, slowing down of heart, and death.

    There is a bulb in the front of the thermometer; it stores mercury. Mercury is very sensitive to temperature change. So if the temperature of our body changes even slightly, the mercury inside the thermometer moves, and we can tell the correct temperature.

    But mercury is poisonous. Exposure to mercury can cause memory loss, trouble speaking or hearing and even death. Therefore new, digital thermometers do not use mercury.

    ![clinical thermometer temperature range](/learning-items/grade7/clinical-thermometer.jpeg)

    Also, there is a kink near the bulb of the clinical thermometer.

    This kink stops mercury from falling back into the bulb of the thermometer immediately after measuring the body temperature. This gives us enough time to take the thermometer out of our mouth, so we can read the temperature.
   `,
        imagePath: "/learning-items/grade7/clinical-thermometer-kink.jpeg",
      },
      {
        id: "how-to-read-a-thermometer-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "How To Read A Thermometer",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![how to read a clinical thermometer quiz](/learning-items/grade7/how-to-read-clinical-thermometer.jpeg)

    What temperature is shown by the thermometer?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "36.1°C",
          },
          {
            id: "opt2",
            text: "36.6°C",
          },
          {
            id: "opt3",
            text: "36.9°C",
          },
          {
            id: "opt4",
            text: "36.7°C",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        ![how to read a clinical thermometer quiz solution](/learning-items/grade7/how-to-read-clinical-thermometer-solution.jpeg)
        __This is incorrect.__
        To read the correct temperature, begin by counting the total number of divisions between 36°C to 37°C. There are 10 of them.

        The first division is 36.1°C; the second is 36.2°C; the third division is 36.3°C and so on. Thus, the correct answer is 36.7°C.

        Here is a way to think about this: The total space between 36°C and 37°C represents 1 degree. And there are a total of 10 divisions between 36°C and 37°C. So each small division represents 1/10 = 0.1 degree. Thus the first division is 36.1°C, the second is 36.2°C, the third division is 36.3°C and so on.
        `,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        __This is incorrect.__

        [Here is a video](https://www.youtube.com/watch?v=Oqb-Oh1nVq0) that shows how to use a clinical thermometer.

        To read the correct temperature, begin by counting the total number of divisions between 36°C to 37°C. There are 10 of them.

        The first division is 36.1°C; the second is 36.2°C; the third division is 36.3°C and so on. Thus, the correct answer is 36.7°C.

        Here is a way to think about this: The total space between 36°C and 37°C represents 1 degree. And there are a total of 10 divisions between 36°C and 37°C. So each small division represents 1/10 = 0.1 degree. Thus the first division is 36.1°C, the second is 36.2°C, the third division is 36.3°C and so on.
        `,
          },
          {
            answerSet: ["opt3"],
            response: dedent`
        ![how to read a clinical thermometer quiz solution](/learning-items/grade7/how-to-read-clinical-thermometer-solution.jpeg)
        __This selection is incorrect.__
        To read the correct temperature, begin by counting the total number of divisions between 36°C to 37°C. There are 10 of them.

        The first division is 36.1°C; the second is 36.2°C; the third division is 36.3°C and so on. Thus, the correct answer is 36.7°C.

        Here is a way to think about this: The total space between 36°C and 37°C represents 1 degree. And there are a total of 10 divisions between 36°C and 37°C. So each small division represents 1/10 = 0.1 degree. Thus the first division is 36.1°C, the second is 36.2°C, the third division is 36.3°C and so on.
        `,
          },
          {
            answerSet: ["opt4"],
            response:
              "__Correct__. To read the correct temperature, begin by counting the total number of divisions between 36°C to 37°C. There are 10 of them. The first division is 36.1°C; the second is 36.2°C; the third division is 36.3°C and so on. Thus, the correct answer is 36.7°C.",
          },
        ],
      },
      {
        id: "what-is-laboratory-thermometer",
        time: 1,
        kind: "image",
        title: "What Is A Laboratory Thermometer?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A lab thermometer is used in a laboratory to measure temperature. For example it is used to measure the temperature of hot water.

    This thermometer can measure a range of temperatures. From -10°C to 110°C.

    ![laboratory thermometer temperature range](/learning-items/grade7/laboratory-thermometer.jpeg)

    Also, a laboratory thermometer does not have a kink near its bulb. You may recall that a clinical thermometer has a kink near its bulb.
   `,
        imagePath: "/learning-items/grade7/laboratory-clinical-thermometer-kink-comparison.jpeg",
      },
      {
        id: "similarities-differences-lab-clinical-thermometer",
        kind: "textResponse",
        time: 5,
        title: "Comparing Thermometers",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![clinical laboratory thermometer similarities differences](/learning-items/grade7/laboratory-clinical-thermometer-size-comparison2.jpeg)

    State the differences between a lab thermometer and a clinical thermometer.

    Write your answer in the box below.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            The first difference is in the size. The lab thermometer is much bigger than the clinical thermometer.

            The lab thermometer can also measure temperatures from -10°C to 110°C. But the clinical thermometer measures temperature only from 35°C to 42°C.

            Finally, there is a kink near the bulb of a clinical thermometer, but no kink is present in a laboratory thermometer.

            The kink prevents the mercury from falling back into the bulb of the clinical thermometer immediately. This gives us enough time to take the thermometer out of our mouth, so we can read the temperature.

            But if we measure the temperature of hot water with a lab thermometer, we have to do so while keeping the thermometer in the water. Otherwise the mercury begins to fall as soon as we take the lab thermometer out of the water.
            `,
              },
            ],
          },
        },
      },
      {
        id: "clinical-or-laboratory-thermometerquiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![boiling water](/learning-items/grade7/boiling-water.jpeg)

    Temperature of boiling water cannot be measured by _________ thermometer.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "clinical",
          },
          {
            id: "opt2",
            text: "laboratory",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. Water boils at 100°C. But the maximum temperature measured by a clinical thermometer is 42°C. Thus the temperature of boiling water __cannot be measured__ by a clinical thermometer.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is not correct. Water boils at 100°C. And the maximum temperature measured by a laboratory thermometer is 110°C. Thus, a laboratory thermometer __can measure__ the boiling temperature of water.",
          },
        ],
      },
      {
        id: "dark-coloured-clothes-in-winter",
        time: 1,
        kind: "image",
        title: "Dark Coloured Clothes In Winter",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Dark colours absorb more heat than light colours. This is why the insides of solar cookers are generally black.

    ![insides of solar panel are dark black](/learning-items/grade7/insides-of-solar-panels-dark-colour-black2.jpeg)

    That is also why we wear dark coloured clothes in winter, so we can feel warmer.
   `,
        imagePath: "/learning-items/grade7/dark-coloured-clothes-absorb-more-heat.jpg",
      },
      {
        id: "final-quiz",
        kind: "textResponse",
        time: 3,
        short: true,
        locked: true,
        title: "Final Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![white house](/learning-items/grade7/white-house.jpeg)

    In places of hot climate it is advised that outer walls of houses be painted white. Explain.

    Write your answer in the space below.
   `,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            I know that dark colours absorb more heat than light colours.

            So that means that white absorbs less heat than black.

            In places of hot climate, outer walls of houses are painted white because white colour will absorb less heat and will keep the house cooler.
            `,
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: " 5",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter5--thumbnail.png",
    title: "Acids, Bases and Salts",
    description:
      "Watch videos, try quizzes and view solutions to learn from Chapter 5, Acids, Bases and Salts, in the Class 7 NCERT science book.",
    items: [
      {
        id: "chapter-5-video",
        kind: "video",
        time: 3,
        title: "Using a Tabla to Learn About Acids & Bases",
        instructions: dedent`
      In this video, we will use the Tabla to learn about acids and bases.

      Yes, you read that correctly.

      We will see that acids are sour and bases are bitter. We will also see how acids and bases change the colour of litmus paper. We will do all of this while listening to the sounds made by the Tabla.
    `,
        videoId: "XtlmUmLRqmw",
      },
      {
        id: "acid-litmus-paper-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Litmus Paper on Acids",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![nitric acid](/learning-items/grade7/nitric-acid-3.jpeg)

      Nitric Acid turns blue litmus paper red.

      True or False?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "__Correct__. Acids turn blue litmus paper red. And Nitric Acid is an acid.",
          },
          {
            answerSet: ["opt2"],
            response: "No, this is not correct.",
          },
        ],
      },
      {
        id: "bases-litmus-paper-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Litmus Paper on Bases",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![soap solution base](/learning-items/grade7/soap-solution-2.jpeg)

      Soap solution is a base, which turns red litmus paper blue.

      True or False?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "__Correct__. Bases turn red litmus paper blue. And soap solution is a base.",
          },
          {
            answerSet: ["opt2"],
            response: "No, this is not correct.",
          },
        ],
      },
      {
        id: "indicators",
        time: 1,
        kind: "image",
        title: "Indicators",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    An indicator is a substance used to test if something is an acid or base.

    Some examples are: litmus paper, turmeric (or haldi), and china rose (or gudhal).`,

        imagePath: "/learning-items/grade7/indicators-litmus-paper-turmeric-china-rose.jpeg",
      },
      {
        id: "lichens",
        time: 1,
        kind: "image",
        title: "Where Does Litmus Paper Come From?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The image below is of Lichen.

    Lichen contains a dye (or colour) called Litmus.

    Litmus can be extracted from Lichen and is made available as litmus paper or litmus solution.`,

        imagePath: "/learning-items/grade7/lichen-litmus.jpeg",
      },
      {
        id: "litmus-paper-test",
        kind: "video",
        time: 2,
        title: "Detecting Acids and Bases with Litmus Paper",
        instructions: dedent`
      Acids turn _blue_ litmus paper red. Also, acids do not change the colour of _red_ litmus paper.

      Bases turn _red_ litmus paper blue. And bases do not change the colour of _blue_ litmus paper.

      Watch this video to see how.
      `,
        videoId: "6DCBWK_Hg5w",
        startTime: 34,
      },
      {
        id: "acidic-or-basic",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Acidic or Basic?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![window cleaner ammonia base](/learning-items/grade7/window-cleaner.jpeg)

      Ammonia is found in many window cleaners. It turns red litmus blue.

      What is its nature?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Acidic",
          },
          {
            id: "opt2",
            text: "Basic",
          },
          {
            id: "opt3",
            text: "Neutral",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "No, this is not correct. Acids do not change the colour of red litmus paper.",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct__. Bases turn red litmus paper blue.",
          },
          {
            answerSet: ["opt3"],
            response: "No, this is not correct.",
          },
        ],
      },
      {
        id: "lemon-acidic-video",
        kind: "video",
        time: 1,
        title: "Lemons are Acidic",
        instructions: dedent`
      Lemons are acidic. They turn blue litmus paper red.
    `,
        videoId: "1F7LWNW4ae4",
      },
      {
        id: "acidic-basic-neutral",
        kind: "textResponse",
        time: 3,
        short: true,
        title: "Acidic, Basic or Neutral?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![blue litmus paper no colour change](/learning-items/grade7/blue-litmus-stays-blue.jpeg)

    Blue litmus paper was dipped in a solution. It remains blue, and does not change colour.

    What is the nature of the solution? Please explain.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            I know the solution is not acid.

            Because when blue litmus paper is dipped in an acid, it changes colour to red.

            That means the solution could either be basic or neutral.
            `,
              },
            ],
          },
        },
      },
      {
        id: "turmeric",
        time: 1,
        kind: "image",
        title: "What is Turmeric?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Turmeric means Haldi in Hindi; it is used in cooking.`,

        imagePath: "/learning-items/grade7/turmeric-haldi.jpeg",
      },
      {
        id: "turmeric-as-an-indicator",
        kind: "video",
        time: 1,
        title: "Turmeric as an Indicator",
        instructions: dedent`
      This video shows how Turmeric solution can be used to identify bases and acids.

      If we add turmeric solution to bases, their colour changes to red.

      If we add turmeric solution to acids or neutral substances, their colour does not change.
    `,
        videoId: "Olezbt9cxfo",
        startTime: 31,
        endTime: 83,
      },
      {
        id: "turmeric-a-way-to-remember",
        time: 1,
        kind: "image",
        title: "Turmeric: A Way To Remember",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The following sentence is hard to remember:

    _If we add turmeric solution to bases, their colour changes to red._

    The GIF below can help us remember that turmeric turns bases to red.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/turmeric-turns-base-red-gif.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "china-rose-as-an-indicator",
        kind: "video",
        time: 2,
        title: "China Rose as an Indicator",
        instructions: dedent`
      China Rose is a flower; another name of China Rose is Hibiscus or Gudhal (in Hindi).

      We can make China Rose solution (or Hibiscus solution) by soaking the petals of this flower in hot water.

      If we add china rose solution to bases, their colour changes to green.

      If we add china rose solution to acids, their colour changes to dark pink.
    `,
        videoId: "vHAhZ5iUQXY",
        startTime: 80,
      },
      {
        id: "china-rose-a-way-to-remember",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "China Rose: A Way To Remember",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      Which country does this flag represent?

      ![china rose gudhal flag](/learning-items/grade7/china-rose-gurhal-flag.jpeg)
`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "China",
          },
          {
            id: "opt2",
            text: "India",
          },
          {
            id: "opt3",
            text: "No Country",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "No, this is not correct. This flag does not represent China.",
          },
          {
            answerSet: ["opt2"],
            response: "No, this is not correct. This flag does not represent India.",
          },
          {
            answerSet: ["opt3"],
            response: dedent`
          __Correct__. This flag represents no country, but instead is a way to remember how China Rose is used as an indicator.

          Acids turn dark pink if we add china rose solution to them.

          Bases turn green if we add china rose solution to them.

          ![china rose indicator remember](/learning-items/grade7/china-rose-gurhal-flag-solution.jpeg)
        `,
          },
        ],
      },
      {
        id: "neutralisation",
        kind: "video",
        time: 1,
        title: "Neutralisation",
        instructions: dedent`
      Watch this video and notice at __1 minute 24 seconds__ when lemon water (which is an acid) is added to soap solution (which is a base).

      After adding a few drops of lemon water, you will notice that the colour of soap solution is no longer red.

      This happens because as lemon water, an acid, is added to soap water, a base, the solution becomes neither acidic nor basic. At that point the solution is neutral.

      When an acid and base are mixed, they neutralise or cancel out the effect of each other. This reaction is called neutralisation.
    `,
        videoId: "Olezbt9cxfo",
        startTime: 31,
      },
      {
        id: "neutralisation-an-example",
        kind: "video",
        time: 1,
        title: "Neutralisation: An Example",
        instructions: dedent`
      Hydrochloric Acid (HCl) is found in toilet cleaners; it is an acid.

      Sodium Hydroxide (NaOH) is found in soaps; it is a base.

      When we mix HCl and NaOH, neutralisation occurs. This reaction produces salt, water and heat.
    `,
        videoId: "-eN0Tt2Gu0I",
      },
      {
        id: "turmeric-quiz",
        kind: "textResponse",
        time: 5,
        title: "Acidic, Basic or Neutral?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![turmeric](/learning-items/grade7/turmeric.jpeg)

    Three liquids are given to you.

    One is Hydrochloric Acid (HCl), another is Sodium Hydroxide (NaOH) and the third is sugar solution. But these liquids are not labelled, so you do not know which is which.

    You only have turmeric indicator. How will you identify the 3 liquids?
`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Koushiki",
                imagePath: "/fake-responses/koushiki.png",
                response: dedent`
            I will add the the turmeric solution to each of the 3 liquids.

            I know that turmeric will turn a base red. So the liquid that turns red is Sodium Hydroxide.

            Then we are left with HCl and sugar solution, but we still do not know which is which.

            So I will add Sodium Hydroxide (NaOH) to both solutions. The one where neutralisation reaction occurs to produce heat, salt and water is an acid i.e. HCl.

            The remaining solution is sugar solution.
            `,
              },
            ],
          },
        },
      },
      {
        id: "ant-bite",
        time: 1,
        kind: "image",
        title: "Ant Bite",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    When ants bite, they inject formic acid into the skin.

    To treat it we apply baking soda on the skin, which is a base.

    This is an example of neutralisation in real life.`,
        imagePath: "/learning-items/grade7/ants-formic-acid-baking-soda-2.jpeg",
      },
      {
        id: "antacid",
        time: 1,
        kind: "image",
        title: "Antacid",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
   The first part of the word _antacid_ reminds me of other words like _anticlockwise_ and _antibacterial_.

   The word _anti_ is used in front of other words to reverse their meaning.

   Thus, when I think of the word antacid, I think of anti-acid, or a base.

   Our stomach contains an acid called HCl. Excess of that acid can cause stomach problems. To reverse or neutralise the effect of too much acid, we drink a base in the form of an antacid like Eno.`,
        imagePath: "/learning-items/grade7/antacid-base.jpeg",
      },
      {
        id: "tables-from-chapter",
        time: 10,
        kind: "image",
        title: "Answers to Table 5.2, 5.3 and 5.5",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![table 5.2 partial](/learning-items/grade7/table-5-2-litmus-test-partial.jpeg)
    Click on the links below to see answers from Table 5.2, 5.3 and 5.5 in this chapter.

    We strongly recommend that you perform the activities in these tables and then check here to confirm your answers.

    [Table 5.2](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/table-5-2-litmus-test.jpeg) — Effect on red and blue litmus paper

    [Table 5.3](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/table-5-3-turmeric-test.jpeg) — Turmeric Test

    [Table 5.5](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/table-5-5-turmeric-china-rose-litmus-test.jpeg) — Effect on litmus paper, turmeric and china rose solution
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
        locked: true,
      },
    ],
  },
  {
    id: " 6",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter6-thumbnail-3.jpeg",
    title: "Physical and Chemical Changes",
    description:
      "Learn Chapter 6, Physical and Chemical Changes, from the Class 7 NCERT science book by watching videos, answering questions, and viewing solutions.",
    items: [
      {
        id: "matchstick-physical-or-chemical",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Physical or Chemical Change",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![burning match stick](/learning-items/grade7/quiz-match-physical-chemical-change.jpg)

      Is burning a matchstick a physical or a chemical change?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Physical Change",
          },
          {
            id: "opt2",
            text: "Chemical Change",
          },
          {
            id: "opt3",
            text: "I Do Not Know",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. But that is ok, since we have not taught you anything about Physical or Chemical changes yet. We will learn that next.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Burning a matchstick is a chemical change. In a chemical change, new substances are produced. In this case, when a matchstick burns, new substances like heat and light are produced.",
          },
          {
            answerSet: ["opt3"],
            response:
              "That is completely ok, since we have not taught you anything about Physical or Chemical changes yet. We will learn that next.",
          },
        ],
      },
      {
        id: "physical-changes",
        time: 1,
        kind: "image",
        title: "What are Physical Changes?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Any change to the _shape, size, colour or state_ of a substance is called a physical change.

    __Changing Shape:__ Cutting a piece of paper is a physical change.

    __Changing Size:__ Crushing chalk into chalk powder is a physical change.

    __Changing Colour:__ Heating an iron rod until it is red hot is a physical change.

    __Changing State:__ Boiling water is a physical change.

    No new substances are produced as a result of this change.

    For example, when we cut paper, we are still left with small bits of paper. We have not produced a new substance in this process.`,
        imagePath: "/learning-items/grade7/physical-change4.jpg",
      },
      {
        id: "chemical-changes",
        time: 1,
        kind: "image",
        title: "What are Chemical Changes?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Any change where new substances are formed is a chemical change.

    Burning a matchstick is a chemical change, because new substances like heat and light are produced as a result of lighting a match.

    Rusting of iron is a chemical change, because rust, which is a new substance, is produced.

    Also, converting a plant found in the rainforest to cancer medicine requires several chemical changes.`,
        imagePath: "/learning-items/grade7/chemical-change2.jpg",
      },
      {
        id: "burning-magnesium-strip",
        kind: "video",
        time: 1,
        title: "Burning a Magnesium Strip",
        instructions: dedent`
      Here you will see a teacher burn a magnesium strip. By the way, magnesium strips or ribbons are used to ignite fireworks.

      When the magnesium strip burns, it produces a bright white light, and powdery ash. The ash is called magnesium oxide.

      Burning of the magnesium ribbon is a __chemical change__ because this reaction produces two new substances —  ash and light.
    `,
        videoId: "dH6p5YwEME4",
        startTime: 5,
      },
      {
        id: "log-of-wood-physical-or-chemical",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![cutting log of wood](/learning-items/grade7/cutting-log-wood.jpeg)

      Cutting a log of wood into pieces is a chemical change. True or False?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. Cutting wood only produces smaller pieces of wood. Since no new substance is produced, cutting a log of wood into smaller pieces is a Physical Change.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Cutting a log of wood into pieces is NOT a chemical change. Cutting wood only produces smaller pieces of wood. Since no new substance is produced, cutting a log of wood into smaller pieces is a Physical Change.",
          },
        ],
      },
      {
        id: "melting-wax-physical-or-chemical",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Physical or Chemical Change",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![melting candle wax](/learning-items/grade7/melting-candle-wax.jpeg)

      Is __melting__ of wax a physical or chemical change?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Physical Change",
          },
          {
            id: "opt2",
            text: "Chemical Change",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. When wax melts it turns from a solid to a liquid. Then after some time it cools to become a solid again. This time, however, the wax has a different shape. Since no new substance is produced in this process, __melting__ of wax is a physical change. __Burning__ of wax to produce heat and light, however, is a chemical change.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is incorrect. When wax __melts__, we turn wax from a solid to a liquid. That is a physical change. But when wax __burns__, we turn wax into heat and light. That is a chemical change.",
          },
        ],
      },
      {
        id: "activity-6-7",
        kind: "video",
        time: 2,
        title: "Video of Activity 6.7",
        instructions: dedent`
      Ok, feel free to watch this video with __no sound__. Do not worry if you do not understand what the teacher in this video is saying. Focus on what he is doing.

      The teacher in this video has a blue solution (copper sulphate). He drops an iron nail into that solution. The nail gets coated with a brown film of copper. If he keeps the nail in the solution for 30 minutes, the blue solution changes to green (iron sulphate).

      The point of this video is that _Copper Sulphate (blue) and Iron_, react to make _Copper and Iron Sulphate (green)_.

      Since two new products are formed here, this is a __chemical change__.
    `,
        videoId: "KmhD8BmEFIo",
      },
      {
        id: "leaves-to-manure-physical-or-chemical",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![formation of manure from leaves](/learning-items/grade7/leaves-to-manure.jpeg)

      Formation of manure from leaves is a physical change. True or False?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. Formation of manure from leaves is NOT a physical change. When leaves decompose, a new substance called manure is produced. Thus, this process is a chemical change.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Formation of manure from leaves is a chemical change. As you know, a chemical change is one where a new substance is produced. When leaves decompose, manure is produced, which is a new substance.",
          },
        ],
      },
      {
        id: "dissolving-sugar-in-water-physical-or-chemical",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Physical or Chemical Change",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![dissolving sugar in water](/learning-items/grade7/mixing-sugar-water.jpeg)

      Is dissolving sugar in water a physical or chemical change?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Physical Change",
          },
          {
            id: "opt2",
            text: "Chemical Change",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. When we dissolve sugar in water, the sugar molecules remain intact and are not changed. Thus, this is a physical change. On the other hand, when we dissolve salt in water, the salt molecules separate causing a chemical reaction.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is incorrect. Although I admit that this quiz can be tough to understand. When we dissolve sugar in water, the sugar molecules remain intact and are not changed. Since no new substance is formed, dissolving sugar in water is a physical change. On the other hand, when we dissolve salt in water, the salt molecules separate to create something new; thus mixing salt in water is a chemical reaction.",
          },
        ],
      },
      {
        id: "condensation-steam-physical-or-chemical",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![condensation of steam](/learning-items/grade7/condensation-of-steam.jpeg)

      Condensation of steam is not a chemical change. True or False?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. Condensation of steam is a physical change. As we mentioned earlier in the chapter, a change of state (for example, from gas to liquid) is called a physical change. Condensation of steam is a change of state from gas (steam) to liquid (water).",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is incorrect. Condensation of steam is a physical change. When the state of an object changes (for example, from gas to liquid) we call that change a physical change. Condensation of steam is a change of state from gas (steam) to liquid (water).",
          },
        ],
      },
      {
        id: "rusting-of-iron",
        time: 1,
        kind: "image",
        title: "Rusting of Iron",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Iron is used in bridges, cars, boats and many other devices found in our homes.

    Over time water and oxygen can react with iron to produce iron oxide, which is otherwise known as rust. Since a new substance is produced in this reaction (rust from iron), this is a chemical change.

    And oh, rust can destroy iron and reduce its strength`,
        imagePath: "/learning-items/grade7/rusting-of-iron2.jpg",
      },
      {
        id: "iron-rust-same-substance-true-false",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      Iron and Rust are the same substance. True or False?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. Iron and rust are __not__ the same substance. Rust is produced when iron and oxygen react in the presence of water. The chemical name of rust is Iron Oxide.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Iron and rust are __not__ the same substance. The chemical name of rust is Iron Oxide. To put it simply, rust is produced when iron and oxygen react in the presence of water. ",
          },
        ],
      },
      {
        id: "rusting-iron-objects-coastal-areas",
        kind: "textResponse",
        time: 5,
        short: false,
        title: "Rusting in Coastal Areas",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![rusting ship in coastal areas](/learning-items/grade7/rust-ship-near-beach.jpeg)

    Explain why rusting of iron objects is faster in coastal areas than in deserts.
    `,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            Oxygen and water are needed for iron objects to rust.

            Oxygen is present everywhere.

            In coastal areas, air has more moisture (or water) because of the nearby sea.

            The water from the sea evaporates and is present as moisture in the air. The air in deserts, however, is dry because there is no water body close by.

            Since more moisture is available in the air in coastal areas, iron objects like ships and iron doors rust faster.
            `,
              },
            ],
          },
        },
      },
      {
        id: "galvanisation",
        time: 1,
        kind: "image",
        title: "Galvanisation",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Rust can destroy iron.

    One way to protect iron is through a process called galvanisation.

    The process of depositing a layer of zinc on iron is called galvanisation.`,
        imagePath: "/learning-items/grade7/galvanisation4.jpg",
      },
      {
        id: "iron-pipes-galvanisation",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![iron pipes galvanisation](/learning-items/grade7/iron-pipes-galvanised2.jpeg)

      Iron pipes coated with zinc do not get rusted easily. True or False?`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. A coating of zinc protects iron from rusting. This process of coating zinc on iron is called Galvanisation.",
          },
          {
            answerSet: ["opt2"],
            response: "This is incorrect. A coating of zinc prevents rusting.",
          },
        ],
      },
      {
        id: "lpg-physical-or-chemical",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Physical or Chemical Change",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![lpg gas cylinder](/learning-items/grade7/lpg-cylinder-2.jpeg)

      The gas we use in the kitchen is called Liquified Petroleum Gas (LPG).

      In the cylinder it exists as a liquid. When it comes out from the cylinder it becomes a gas (Change A), and then it burns (Change B).

      The following statements pertain to these changes. Choose the correct one.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Change A is a chemical change",
          },
          {
            id: "opt2",
            text: "Change B is a chemical change",
          },
          {
            id: "opt3",
            text: "Both Change A and B are chemical changes",
          },
          {
            id: "opt4",
            text: "Neither A nor B are chemical changes",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Change A is liquid turning into gas. That is a change of state, which is a physical change.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Change B is burning of gas to produce heat and light. This change creates a new substance and thus is a chemical change.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is incorrect. Change A is liquid turning into gas. That is a physical change.",
          },
          {
            answerSet: ["opt4"],
            response:
              "This is incorrect. Change B is burning of gas to produce heat and light. This change creates a substance that did not exist previously and thus is a chemical change.",
          },
        ],
      },
      {
        id: "anaerobic-bacteria-physical-or-chemical",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Physical or Chemical Change",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      Anaerobic bacteria digest animal waste and produce biogas (Change A).

      The biogas is then burnt as fuel (Change B).

      The following statements pertain to these changes. Choose the correct one.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Change A is a chemical change",
          },
          {
            id: "opt2",
            text: "Change B is a chemical change",
          },
          {
            id: "opt3",
            text: "Both Change A and B are chemical changes",
          },
          {
            id: "opt4",
            text: "Neither A nor B are chemical changes",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. Change A is using animal waste to produce biogas. This change creates a substance that did not exist previously and thus is a chemical change.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Change B involves burning fuel to produce heat and light. This change creates a substance that did not exist previously and thus is a chemical change.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. Both Change A and Change B produce substances that did not exist previously, and thus both Change A and Change B are chemical changes.",
          },
          {
            answerSet: ["opt4"],
            response:
              "This is incorrect. Both Change A and Change B produce substances that did not exist previously, and thus both are chemical changes.",
          },
        ],
      },
      {
        id: "burning-candle-physical-chemical-changes",
        kind: "textResponse",
        time: 5,
        short: false,
        title: "Physical and Chemical Changes",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![burning candle](/learning-items/grade7/candle-burning.jpeg)

    When a candle burns, both physical and chemical changes take place. Identify these changes.

    Also, give another example of a familiar process in which both the chemical and physical changes take place.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            I can think of several changes that happen when a candle burns.

            When the wax melts, it just changes from solid to liquid, which is a physical change.

            When the wax burns, it is used to produce heat and light. Since a new substance is produced in this process, it is a chemical change.

            Finally, when we cook food we see both physical and chemical changes. For example, when we cook vegetables that is a chemical change; and when we boil water that is a physical change. Also, when we roll the dough to make chapatis, that is a physical change. And finally when we put those chapatis on a tava or pan to bake them, that is a chemical change.
            `,
              },
            ],
          },
        },
      },
      {
        id: "crystallisation",
        kind: "video",
        time: 1,
        title: "Crystallisation",
        instructions: dedent`
      In this video, a teacher adds a blue powder (copper sulphate powder) into a blue solution (copper sulphate solution). He keeps adding the powder until the powder does not dissolve in the solution any more.

      He then suspends a thread in that solution. After a few days, he takes out large crystals of copper sulphate from the solution.

      The process of obtaining large crystals of pure substances from their solution is called Cyrstallisation.

      Now, if you are confused and wondering why we are studying this stuff, I must say that I am confused too. I actually am not sure why the authors of the science book put cyrstallisation into this chapter.
    `,
        videoId: "QdwKhbtzsug",
        startTime: 21,
        endTime: 86,
      },
      {
        id: "baking-soda-lemon-juice",
        kind: "textResponse",
        time: 3,
        short: false,
        locked: true,
        title: "Final Quiz with Video",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![baking soda and lemon juice produce carbon dioxide](/learning-items/grade7/baking-soda-lemon-juice.jpeg)

    When baking soda is mixed with lemon juice, bubbles are formed with the evolution of a gas. You can see a [video of that experiment here.](https://www.youtube.com/watch?v=o71ezx5fPZY)

    What type of change is this? Explain.
    `,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Koushiki",
                imagePath: "/fake-responses/koushiki.png",
                response: dedent`
            I liked the video link in this quiz.

            When baking soda is mixed with lemon juice, bubbles are produced. These are due to a gas called carbon dioxide.

            Since a new substance is produced here, this change is a chemical change.
            `,
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: " 7",
    title: "Weather, Climate and Adaptations",
    description:
      "Learn Chapter 7, Weather Climate and Adaptations, from the Class 7 NCERT science book by watching videos, answering questions, and viewing solutions.",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter7-thumbnail-2.jpeg",
    items: [
      {
        id: "weather",
        time: 1,
        kind: "image",
        title: "Weather",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Weather is the day to day condition of a place with respect to temperature, humidity, rainfall, and windpseed.

    I am writing this on _January 31st, 2017_, and I am located in _New Delhi_.

    Today, the temperature in Delhi is 21 degree Celsius, with 58% humidity, no rainfall and a windspeed of 14 km/h. It is a very pleasant day.
`,
        imagePath: "/learning-items/grade7/weather.jpeg",
      },
      {
        id: "elements-of-weather",
        time: 1,
        kind: "image",
        title: "Elements of Weather",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Elements of cricket include bowling, batting, wicket keeping and fielding.

    The word element here means _part of_. Much like batting and bowling are part of cricket.

    Elements of weather include temperature, humidity, rainfall and windspeed.
`,
        imagePath: "/learning-items/grade7/elements-of-weather-cricket.jpeg",
      },
      {
        id: "elements-of-weather-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Weather Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![weather report](/learning-items/grade7/weather-report-weekly.jpeg)

      All of the following are elements of weather, except for one.

      Select the odd one out.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Humidity",
          },
          {
            id: "opt2",
            text: "Temperature",
          },
          {
            id: "opt3",
            text: "Car Speed",
          },
          {
            id: "opt4",
            text: "Rainfall",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "Humidity is the amount of water vapour in the air. We will learn about this soon. Humidity is an element of weather.",
          },
          {
            answerSet: ["opt2"],
            response: "Temperature is an element of weather.",
          },
          {
            answerSet: ["opt3"],
            response: "__Correct__. Car speed has got nothing to do with weather.",
          },
          {
            answerSet: ["opt4"],
            response: "Rainfall is a part of weather.",
          },
        ],
      },
      {
        id: "weather-changes",
        time: 1,
        kind: "image",
        title: "Weather Changes Frequently",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Weather changes frequently. Sometimes weather changes daily, sometimes it changes within an hour.
`,
        imagePath: "/learning-items/grade7/weather-changes-hourly.jpeg",
      },
      {
        id: "humidity-humidifier",
        time: 1,
        kind: "image",
        title: "What is Humidity?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Humidity is the amount of water vapour or moisture in the air.

    One way to remember this is to think of a machine called the _Humidifier_.

    You can find the humidifier in beauty salons. It adds water vapour or moisture to the air around it and is sometimes used to treat dry skin.
`,
        imagePath: "/learning-items/grade7/humidifier-humidity.jpeg",
      },
      {
        id: "high-humidity",
        time: 1,
        kind: "image",
        title: "What Does High Humidity Feel Like?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    When humidity is high, we feel hotter than the actual temperature.

    For example, when the humidity is 60% (which, by the way, is not very high), 35 degree Celsius will feel like 45 degree Celsius.

    Why does that happen? Read this [amazing page from MIT](https://engineering.mit.edu/ask/why-do-we-sweat-more-high-humidity) if you are curious to find the answer.`,
        imagePath: "/learning-items/grade7/what-does-high-humidity-feel-like.jpeg",
      },
      {
        id: "humidity-cartoon",
        time: 1,
        kind: "image",
        title: "A Cartoon On Humidity",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This cartoon is going to help you remember the definition of humidity.

    Humidity is the amount of moisture in the air.

    The lady on the laptop thinks that the humidity is high, as the person outside her window is not walking, but is swimming in water.`,
        imagePath: "/learning-items/grade7/humidity-cartoon.jpg",
      },
      {
        id: "explain-humidity",
        kind: "textResponse",
        time: 2,
        short: true,
        title: "Tweet About Humidity",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Imagine you have to explain humidity to someone while using twitter. How would you do it in less than 140 characters?

    Write your answer in the box below and then tweet it with #humhaihumid`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`When it is humid, we feel hotter. Mumbai is Humid. #humhaihumid
            `,
              },
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`#humhaihumid Humidity is the amount of water vapour in the air.
            `,
              },
              {
                studentName: "Koushiki",
                imagePath: "/fake-responses/koushiki.png",
                response: dedent`The time before monsoons is humid because of a lot of moisture in air. #humhaihumid
            `,
              },
            ],
          },
        },
      },
      {
        id: "seasons-video",
        kind: "video",
        time: 2,
        title: "Why Are Days Longer In Summers?",
        instructions: dedent`
    On Page 71, the science book asks the following: _Are days shorter in winter than in summers?_

    Yes, they are. Watch this video to find out why.`,
        videoId: "KUU7IyfR34o",
        endTime: 93,
      },
      {
        id: "sun-changes-weather",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![sun changes weather](/learning-items/grade7/sun-changes-weather.jpeg)

      Changes in weather, like temperature and rainfall, are driven by the _______.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "government",
          },
          {
            id: "opt2",
            text: "sun",
          },
          {
            id: "opt3",
            text: "moon",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "No this is not correct. Government departments monitor the weather, but do not generally impact the day to day weather.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. The sun changes temperature, rainfall and other weather elements on earth.",
          },
          {
            answerSet: ["opt3"],
            response:
              "While the moon causes changes on earth — like high and low tides — it does not cause temperature- and rainfall-related changes.",
          },
        ],
      },
      {
        id: "climate",
        time: 1,
        kind: "image",
        title: "Climate",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    In the gif below you see monthly average temperatures from 1961–1990.

    For example when you see JAN, you are looking at an average of temperatures in January 1961, and January 1962, all the way to January 1990.

    This image is an example of __climate data__.

    The average weather pattern taken over a large period of time, say 25 years, is called __climate__.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/average-temperature-monthly.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "wet-climate",
        time: 1,
        kind: "image",
        title: "Wet Climate",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    If you look at the graph below, you will notice that in a given year, it rains on 70% of the days in Shillong, Meghalaya.

    That means that out of the 365 days in a year, it rains in Shillong on an average of 256 days.

    If a place has a lot of rainfall like Shillong, we say that the place has a wet climate (specially when you compare it to a dry place like Rajasthan).`,
        imagePath: "/learning-items/grade7/meghalaya-wet-climate.jpeg",
      },
      {
        id: "hot-climate-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Hot Climate Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      Have a look at the graph below.

      Which city, New Delhi or Srinagar, has a hotter climate?

      ![hot climate New Delhi SriNagar](/learning-items/grade7/average-monthly-temperatures-delhi-srinagar-.jpeg)
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "New Delhi",
          },
          {
            id: "opt2",
            text: "Srinagar",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. In the graph we can see that the average temperature in New Delhi are greater than the average temperature in Srinagar. And this is true for the entire year.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is not correct. Look at the month of May. The average temperature in New Delhi in May is 40 degree Celsius. The average temperature in Srinagar in May is 27 degree Celsius. The temperature in New Delhi is higher than the temperature in Srinagar. And this is true for all months of the year. Thus, New Delhi has a hotter climate.",
          },
        ],
      },
      {
        id: "weather-versus-climate",
        time: 1,
        kind: "image",
        title: "Weather versus Climate",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Weather is measured over a short period of time. For instance when we say, _how is the weather,_ we mean, how hot or wet it is on that day.

    Climate is associated with a long period of time. For instance, when we talk about Climate Change, we mean a change in global climate patterns that cause sea levels to rise as measured over 10 or 20 years.
`,
        imagePath: "/learning-items/grade7/weather-vs-climate-2.jpeg",
      },
      {
        id: "weather-versus-climate-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Weather Vs. Climate Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![hot climate New Delhi SriNagar](/learning-items/grade7/weather-report-weekly.jpeg)

      Which of the following two changes more frequently?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Weather",
          },
          {
            id: "opt2",
            text: "Climate",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. Weather is change in temperature, rainfall etc. on a daily or even hourly basis.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is not correct. When we talk of climate, we talk of average changes in weather over a long period of time, say 25 years.",
          },
        ],
      },
      {
        id: "polar-regions-of-the-world",
        time: 1,
        kind: "image",
        title: "Polar Regions Of The World",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This image shows us the two major polar regions of the world — Arctic in the north, and Antarctica in the south.

    These regions are covered with snow and are cold for most of the year.
`,
        imagePath: "/learning-items/grade7/polar-regions-world.jpeg",
      },
      {
        id: "sun-does-not-set-in-summers-in-polar-regions",
        time: 1,
        kind: "image",
        title: "Sun At Night",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This picture was taken at midnight.

    As you can see the sun has not set even in the middle of the night.

    This picture was taken in Norway, which is in the Arctic (Polar Region). During some months in the summer, the sun does not set here. You can see an [amazing YouTube video](https://www.youtube.com/watch?v=ndlQNicOeso) of this here.

    Also, if you are curious, [here is an explanation](http://www.athropolis.com/arctic-facts/fact-midnight-sun.htm) for why this happens.
`,
        imagePath: "/learning-items/grade7/arctic-sun-does-not-set-summer.jpeg",
      },
      {
        id: "sun-does-not-rise-in-winters-in-polar-regions",
        time: 1,
        kind: "image",
        title: "No Sun During The Day",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This picture was taken in the afternoon at 1PM.

    As you can see the sun has not risen here and the lights are on.

    This picture was taken in Norway, which is in the Arctic (Polar Region). During some months in the winter, the sun does not rise here.
`,
        imagePath: "/learning-items/grade7/arctic-sun-does-not-rise-winter.jpeg",
      },
      {
        id: "polar-bear-layers-fur-swim-adaptations",
        time: 1,
        kind: "image",
        title: "Adaptations Made By Polar Bears",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Polar Bears live in the Arctic.

    They have two thick layers of fur and a layer of fat underneath to keep them warm in the cold climate. They are so well insulated that they have to move slowly to prevent overheating.

    On warm days they swim to cool off.
`,
        imagePath: "/learning-items/grade7/polar-bear-layers-fur-swim-adaptation.jpg",
      },
      {
        id: "polar-bear-close-nostrils-adaptations",
        time: 1,
        kind: "image",
        title: "Polar Bears Can Close Their Nostrils",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Polar Bears can close their nostrils underwater, and can dive for up to 3 minutes.
`,
        imagePath: "/learning-items/grade7/polar-bear-close-nostrils-adaptation.jpg",
      },
      {
        id: "polar-bear-camouflage",
        time: 1,
        kind: "image",
        title: "Polar Bears Can Hide In Snow",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Polar Bears have white fur and thus they can easily hide in the snow. This ability to hide protects the polar bears from their hunters and allows them to get close to their prey without being detected.

    The ability to hide in one\`s surroundings is called camouflage.

    Here is a cartoon that shows the polar bear getting close to its prey — the walruses.
`,
        imagePath: "/learning-items/grade7/polar-bear-camouflage-adaptation-2.jpg",
      },
      {
        id: "polar-bear-adaptations-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Polar Bears Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![polar bears](/learning-items/grade7/polar-bears-adaptations-quiz.jpeg)

      Which features adapt polar bears to live in extremely cold climate?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Thin skin, large eyes",
          },
          {
            id: "opt2",
            text: "White fur, fat below skin",
          },
          {
            id: "opt3",
            text: "Gills for respiration",
          },
          {
            id: "opt4",
            text: "Strong sense of smell",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is incorrect. Polar bears do not have thin skin.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Polar Bears have white fur which allows them to hide in snow. They also have fat below their skin to keep them warm.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is incorrect. Polar Bears do not have gills and cannot breathe under water. They can close their nostrils under water, however.",
          },
          {
            answerSet: ["opt4"],
            response:
              "__Correct__. Polar Bears have a strong sense of smell, which can lead them to prey.",
          },
        ],
      },
      {
        id: "penguin-adaptations",
        time: 1,
        kind: "image",
        title: "Penguin Adaptations",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Penguins live in the Southern Hemisphere. This includes Antarctica (which is classified as Polar Region).

    Penguins have thick skin and fat to protect them from the cold.

    Their feet have webs, which act as paddles to provide more surface to push against water. This makes them good swimmers.
`,
        imagePath: "/learning-items/grade7/penguin-adaptation.jpeg",
      },
      {
        id: "penguins-huddle",
        kind: "video",
        time: 2,
        title: "Penguins Huddle",
        instructions: dedent`
    Penguins huddle together to stay warm and to protect themselves from the extreme cold of Antarctica.`,
        videoId: "OL7O5O7U4Gs",
        startTime: 9,
        endTime: 164,
      },
      {
        id: "polar-region-adaptations-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Polar Region Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![polar regions](/learning-items/grade7/polar-region.jpeg)

      Which adaptations are found in Polar Regions?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Diet heavy on fruits",
          },
          {
            id: "opt2",
            text: "Layer of fat under skin",
          },
          {
            id: "opt3",
            text: "Sticky pads on feet",
          },
          {
            id: "opt4",
            text: "White fur",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Not many fruits are available in Polar Regions. A diet heavy on fruits can be found in animals in forests, which we will discuss next.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Polar Bears, who live in Arctic, and Penguins, who live in Antarctic, both have a layer of fat under their skin.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is incorrect. Some frogs have sticky pads on their feet that they have developed to climb trees. These frogs live in forests, which we will talk about next.",
          },
          {
            answerSet: ["opt4"],
            response: "__Correct__. Polar Bears have white fur.",
          },
        ],
      },
      {
        id: "bar-headed-geese",
        kind: "video",
        time: 2,
        title: "Birds That Fly Over Everest",
        instructions: dedent`
    Some birds migrate or move over long distances.

    For example, the bar-headed goose travels from southern India to central asia. And what is in the middle of those two places? Mount Everest. These birds are seen flying over Mount Everest.

    You can read more about them in this [article from Science Magazine](http://www.sciencemag.org/news/2011/06/most-extreme-migration-earth).
    `,
        videoId: "WnNQWj98BR0",
        startTime: 15,
        endTime: 121,
      },
      {
        id: "tropical-rainforests",
        time: 1,
        kind: "image",
        title: "Tropical Rainforests",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Below is a map of where we can find tropical rainforests. The western parts of India, otherwise known as Western Ghats, are a tropical rainforest.

    These forests have a lot of plant and animal species. They are also warm — day temperatures cross 40 degree celsius regularly. These forests are close to the equator and also get a lot of rain.
`,
        imagePath: "/learning-items/grade7/tropical-rainforests-world.jpeg",
      },
      {
        id: "tropical-rainforests-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Tropical Rainforests Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![tropical rainforests](/learning-items/grade7/western-ghats-tropical-forests.jpeg)

      This is an image from the forests of Western Ghats in India. They are a part of the tropical rainforests of the world.

      Based on what you know about tropical rainforests, which of the following options best describes a tropical region?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "cold and humid",
          },
          {
            id: "opt2",
            text: "hot and dry",
          },
          {
            id: "opt3",
            text: "hot and humid",
          },
          {
            id: "opt4",
            text: "moderate temperature, heavy rainfall",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Tropical rainforests are not cold. They are near the equator and temperatures in these forests get up to 40 degree Celsius regularly.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is incorrect. These forests are hot, but they are not dry. They receive a lot of rain, thus the name rainforests.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. These forests are hot. These forests also receive a lot of rain. The rain water evaporates and the trees in the forest lose water through transpiration. This water vapour or moisture fills the air. Thus these places are really humid.",
          },
          {
            answerSet: ["opt4"],
            response:
              "This is incorrect. Tropical rainforests are hot. They do not have moderate temperature.",
          },
        ],
      },
      {
        id: "adaptations-by-animals-in-rainforests",
        time: 1,
        kind: "image",
        title: "Adaptations By Animals In Rainforests",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Animals adapt to living in the tropical rainforests.

    For example monkeys live on trees and have adapted to the forest by developing long tails that can grasp branches.

    Toucan is a bird that has a long beak and is found in Central and South America. It sits on big branches and its long beak can still reach smaller branches for food that otherwise cannot support its weight.
`,
        imagePath: "/learning-items/grade7/monkey-toucan-adaptation.jpeg",
      },
      {
        id: "elephant-adaptation",
        kind: "textResponse",
        time: 5,
        title: "Elephant Adaptations",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`

    ![elephant](/learning-items/grade7/elephant-adaptations.jpeg)

    How do elephants living in the rainforests adapt themselves?

    Feel free to read _page 76_ from your science book to answer this question.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            After reading the science book I found that elephants have a strong sense of smell.

            They have also developed a trunk that can pick up food.

            Their large ears help it stay cool in the hot forest.

            Their tusks are modified teeth that help them tear the bark of trees, which the elephants can then eat.

            `,
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: " 9",
    title: "Soil",
    description:
      "Watch videos to learn Chapter 9, Soil, from the NCERT science book in Class 7. Try questions and answers on clayey, sandy and loamy soils.",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter9-thumbnail.jpg",
    items: [
      {
        id: "how-is-soil-formed-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "How Is Soil Formed?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![how is soil formed](/learning-items/grade7/how-is-soil-formed-quiz.jpeg)

      Can you tell me how is soil formed? Select the best response from the following.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "I do not know",
          },
          {
            id: "opt2",
            text: "Rocks break down to make soil",
          },
          {
            id: "opt3",
            text: "In factories",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "It is completely ok that you do not know. Let us learn how soil is formed next.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Rocks are broken down by wind and water to form soil. Let us learn about this next.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is not correct. Soil is not formed in factories. Let us learn how soil is formed next.",
          },
        ],
      },
      {
        id: "weathering",
        time: 1,
        kind: "image",
        title: "Weathering",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Look at this strange looking rock. It took wind thousands of years to turn a large rock into the shape of a mushroom.

    When the wind changes the shape of a rock, it also erodes or breaks down parts of the rock. These eroded particles are further broken down by wind to form soil.

    The process by which rocks are broken down into soil by wind (and water and other climate factors) is called Weathering.
 `,
        imagePath: "/learning-items/grade7/how-is-soil-formed.jpeg",
      },
      {
        id: "soil-profile",
        kind: "video",
        time: 4,
        title: "Layers Of Soil",
        instructions: dedent`
    In this video we will look at 4 different layers of soil:

    1) __A Horizon or Top Soil__: This layer is dark in colour and contains humus. Rotting leaves make up humus and humus makes the soil fertile.
    2) __B Horizon or Middle Layer__: This layer has less humus but more minerals. Also, this layer is harder than the A Horizon.
    3) __C Horizon__: This is made up of small lumps of rocks with cracks and crevices.
    4) __Bedrock__: This consists of hard rocks.

    _Note:_ The video also talks about a layer called _O Horizon_, which is the top most layer of soil. Our science book, however, does not mention this layer.
`,
        videoId: "ysIm7ImsK6c",
        startTime: 94,
        endTime: 310,
      },
      {
        id: "soil-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "What Does Soil Contain?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![soil](/learning-items/grade7/soil-quiz.jpeg)

      In addition to the rock particles, the soil contains`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "air and water",
          },
          {
            id: "opt2",
            text: "water and plants",
          },
          {
            id: "opt3",
            text: "minerals, organic matter, air and water",
          },
          {
            id: "opt4",
            text: "water, air and plants",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is correct, but incomplete. Soil contains both air and water. But it also contains minerals and organic matter. Organic matter means the remains of dead plants and animals.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is correct, but incomplete. Soil can contain water. It definitely contains the roots of plants. But it also contains minerals and organic matter. Organic matter means the remains of dead plants and animals.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. Soil contains minerals, air and water. It also contains organic matter, which is the dead remains of plants and animals.",
          },
          {
            answerSet: ["opt4"],
            response:
              "This is correct, but incomplete. Soil can contain water and air. It definitely contains the roots of plants. But it also contains minerals and organic matter. Organic matter means the remains of dead plants and animals.",
          },
        ],
      },
      {
        id: "clayey-soil-sandy-soil",
        time: 1,
        kind: "image",
        title: "Clayey Soil And Sandy Soil",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    There are two main types of soil we will study: Clayey Soil and Sandy Soil.

    Here is the main difference between them:
     - Clayey soil has __small__ soil particles.
     - Sandy soil has __large__ soil particles.
`,
        imagePath: "/learning-items/grade7/clayey-small-particles-sandy-big-particles.jpeg",
      },
      {
        id: "how-to-remember-clayey-soil-sandy-soil",
        time: 1,
        kind: "image",
        title: "How To Remember: Clayey & Sandy Soil",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    It can be hard to remember that Clayey soil has small particles and Sandy soil has large particles. The image below can help you remember this fact.

    Notice that the size of letters in the image is increasing from _A_ to _Z_.

    Letter _C_ stands for Clayey Soil, and the size of letter _C_ is small. This can help you remember that Clayey soil has small particles.

    Letter _S_ stands for Sandy Soil, and the size of letter _S_ is large. This can help you remember that Sandy soil has large particles.
`,
        imagePath:
          "/learning-items/grade7/how-to-remember-clayey-small-particles-sandy-big-particles.jpeg",
      },
      {
        id: "difference-between-clayey-soil-sandy-soil",
        time: 1,
        kind: "image",
        title: "Difference Between Clayey & Sandy Soil",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    __Clayey Soil__: We know that Clayey soil has small particles. These small particles are packed really tightly with each other. Thus there are only small empty spaces left in between those particles.

    Small empty spaces leaves very little space for air. Thus Clayey soil does not have a lot of air. Also, water can easily be held in between these small empty spaces. Thus Clayey soil can hold a lot of water.

    __Sandy Soil__: We know that Sandy soil has large particles. These large particles do not fit closely and cannot be packed really tightly. Thus there are large empty spaces in between those particles.

    Large empty spaces leaves a lot of space for air. That means that Sandy soil has a lot of air or is well aerated. Also, water can easily leak through these large empty spaces. Thus Sandy soil does not hold a lot of water and is dry.
`,
        imagePath:
          "/learning-items/grade7/clayey-less-air-wet-sandy-aerated-less-water-difference.jpeg",
      },
      {
        id: "draw-what-you-have-learned",
        kind: "imageResponse",
        time: 5,
        title: "Draw and Share",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Use a _pen and paper_ to draw a picture that describes the differences between Clayey Soil and Sandy Soil.

    Then take a photo of the drawing from your phone and upload it here.`,
        hacks: {
          afterBody: {
            show: "locked",
            preface:
              "The picture below was made and uploaded by Sid, a student of Class 6 at Ahlcon International School.",
            feedbackImagePath: "/learning-items/grade7/clayey-sandy-difference.jpeg",
          },
        },
      },
      {
        id: "loamy-soil",
        time: 1,
        kind: "image",
        title: "Loamy Soil",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Loamy soil is a mixture of clayey and sandy soil. It also contains another type of soil called silt.

    Loamy soil is very fertile and used to grow a lot of crops as it also contains a lot of humus. [This video](https://www.youtube.com/watch?v=1_axgwGfCHw) explains humus very well.
`,
        imagePath: "/learning-items/grade7/loamy-soil-mixture-clayey-sandy-fertile.jpeg",
      },
      {
        id: "how-to-remember-loamy-soil",
        time: 1,
        kind: "image",
        title: "How To Remember: Loamy Soil",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    It can be hard to remember that Loamy soil is a mixture of Clayey and Sandy soil. The image below can help you remember this fact.

    Letter _L_ stands for Loamy Soil, and _L_ is in between _C (for Clayey)_ and _S (for Sandy)_. This can help you remember that Loamy soil is a mixture of Clayey and Sandy soil
`,
        imagePath: "/learning-items/grade7/loamy-soil-mixture-clayey-sandy-how-to-remember.jpeg",
      },
      {
        id: "percolation-rate",
        time: 3,
        kind: "image",
        title: "Percolation Rate (Activity 9.4)",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    _Activity 9.4 on Page 100_ of your science book, lists the following steps.

    __Step 1__: Imagine you have an empty pipe, and you make the pipe stand in some soil.
    ![percolation rate empty pipe](/learning-items/grade7/percolation-rate-empty-pipe.jpeg)

    __Step 2__: Then you pour water into that empty pipe from a 200 milliliter bottle. You also start the  timer when you begin pouring.
    ![percolation rate pour water](/learning-items/grade7/percolation-rate-pour-water.jpeg)

    __Step 3__: The water will start percolating through the soil or passing through the soil. Wait till __all__ the water has percolated.
    ![percolation rate water leaks](/learning-items/grade7/percolation-rate-water-leaks.jpeg)

    __Step 4__: When all the water has passed through the soil, and the pipe is completely empty, stop the timer. Let us say that the time taken was 20 minutes. We can use this experiment to calculate the __Percolation Rate__.
    ![percolation rate stop watch](/learning-items/grade7/percolation-rate-stop-watch.jpeg)

    Now to understand Percolation Rate, let us first  think of Over Rate in cricket.
    ![over rate cricket](/learning-items/grade7/over-rate-cricket.jpeg)

    Over Rate is the speed with which a team bowls their overs.

    It is calculated by dividing the number of overs bowled by the time taken to bowl those overs. So if 30 overs were bowled in 3 hours, the over rate is 10 overs per hour.
    ![over rate example](/learning-items/grade7/overrate-example.jpeg)

    Similarly, __Percolation Rate__ is the speed with which water can pass through the soil.

    It is calculated by dividing the amount of water poured in soil by the time it took to percolate. So if it takes 200 mL of water 20 minutes to pass through soil, the percolation rate is 10 mL/min.
`,
        imagePath: "/learning-items/grade7/percolation-rate-example.jpeg",
      },
      {
        id: "percolation-rate-quiz",
        kind: "multipleChoiceResponse",
        time: 2,
        title: "Percolation Rate Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Razia conducted an experiment in the field related to the rate of percolation.

    She observed that it took 40 min for 200 mL of water to percolate through the soil sample. Calculate the rate of percolation.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "10 mL/min",
          },
          {
            id: "opt2",
            text: "5",
          },
          {
            id: "opt3",
            text: "5 mL/min",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`This is not correct. Percolation rate is calculated by dividing the amount of water (200 mL) with the time taken (40 min). So 200 mL divided by 40 min gives us 5 mL/min.

        ![percolation rate quiz](/learning-items/grade7/percolation-rate-quiz.jpeg)
        `,
          },
          {
            answerSet: ["opt2"],
            response:
              "This is half correct as the units are missing. The correct answer should be 5 mL/min. Percolation rate is calculated by dividing the amount of water (200 mL) with the time taken (40 min). So 200 mL divided by 40 min gives us 5 mL/min",
          },
          {
            answerSet: ["opt3"],
            response: dedent`__Correct__. Percolation rate is calculated by dividing the amount of water (200 mL) with the time taken (40 min). So 200 mL divided by 40 min gives us 5 mL/min.

        ![percolation rate quiz](/learning-items/grade7/percolation-rate-quiz.jpeg)
        `,
          },
        ],
      },
      {
        id: "highest-percolation-rate",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Highest Percolation Rate",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      Which soil would have the highest rate of percolation?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Clayey",
          },
          {
            id: "opt2",
            text: "Loamy",
          },
          {
            id: "opt3",
            text: "Sandy",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`No this is not correct.

        Clayey soil has small particles. These small particles are packed tightly against each other, and thus there are only small spaces between these particles. Water is easily held in between these small spaces, and thus the percolation of water (speed with which water passes Clayey soil) would be slow.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`No this is not correct.

        Loamy soil is a mixture of Clayey and Sandy soil. Since this type of soil has both big and small particles, its percolation rate will be higher than Clayey but lower than Sandy soil.`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`__Correct__.

        Sandy soil has large particles. These large particles are NOT packed tightly against each other, and thus there are large spaces between these particles. Water can easily leak or percolate in between these large spaces. Thus the percolation of water (or the speed with which water passes Sandy soil) would be highest.`,
          },
        ],
      },
      {
        id: "percolation-rate-video",
        kind: "video",
        time: 3,
        title: "Video On Percolation Rate",
        instructions: dedent`
    In this experiment we will use 3 different soil samples: Sandy, Loamy and Clayey.

    We will then pass red-coloured water through each of them to see which soil lets the most amount of water pass through it.

    ![percolation rate experiment](/learning-items/grade7/percolation-rate-experiment.jpeg)

    You will see that Sandy Soil has the highest percolation rate. That means that water passes through sand faster than it does through loam or clay.

    Sand has large particles. These large particles are NOT packed tightly against each other, and thus there are large spaces between these particles. Water can easily leak or percolate in between these large spaces.

    But Clay and Loam do not have large particles and thus they can hold water better than Sand.

    Thus the percolation of water for Sand (or the speed with which water passes Sandy soil) is the highest.`,
        videoId: "N_pARn50GHo",
      },
      {
        id: "soil-contains-moisture",
        time: 1,
        kind: "image",
        title: "Soil Contains Moisture (Activity 9.5)",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This experiment will show that soil contains water or moisture.

    Take a spoon full of soil and put it into a test tube. Then heat that test tube.

    Very soon, water in the soil will evaporate. Some of this evaporated water vapour will condense on the inner side of the test tube. Thus, you will soon see droplets of water on the inner sides of the test tube. This shows that soil contains water.
`,
        imagePath: "/learning-items/grade7/moisture-in-water.jpeg",
      },
      {
        id: "seeing-moisture-in-soil",
        time: 1,
        kind: "image",
        title: "Seeing Water Evaporate From Soil",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Look at this GIF carefully. Can you see the air above land shimmer? In other words, can you see the air above land sparkle?

    On a hot day, water vapour evaporates from soil. This vapour reflects the sunlight and thus causes the shimmering you see in the GIF.

    ![water evaporates from soil shimmer](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/water-evaporating-soil.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "absorption-of-water-in-soil",
        kind: "video",
        time: 3,
        title: "Absorption Of Water In Soil (Activity 9.6)",
        instructions: dedent`
    In this activity we will take equal amounts of 3 soil samples — Clay, Loam and Sand. We then pour a similar amount of water through each of them.

    __Clayey Soil__: We find that only a little bit of the water passes through clay. That tells us that clay absorbs a lot of water.

    Clayey soil has small particles; and small particles have small spaces between them. Those small spaces allow only a little bit of water to pass through. Thus clay absorbs or retains a lot of  water.

    __Sandy Soil__: We also find that most of the water passes through sand. That tells us that sand absorbs very little water.

    Sand has big particles; and big particles have big spaces between them. Those big spaces allow almost all of the water to pass through. Thus sand absorbs or retains a very small amount of water.

    __Loamy Soil__: Loamy soil is a mixture of sand and clay. Thus, loamy soil absorbs more water than sand but less water than clay.
    `,
        videoId: "Ond_-SsiWE8",
        startTime: 50,
      },
      {
        id: "soil-absorption-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Soil Absorption Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      The water holding capacity is the highest in ________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "sandy soil",
          },
          {
            id: "opt2",
            text: "clayey soil",
          },
          {
            id: "opt3",
            text: "loamy soil",
          },
          {
            id: "opt4",
            text: "mixture of sand and loam",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Sandy soil does not absorb a lot of water. In fact, almost all of the water passes right through sand.",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct__. Clayey soil has the highest water holding capacity.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is incorrect. Loamy soil is a mixture of clayey and sandy soil. Therefore, the water holding capacity of loamy soil is less than that of clay.",
          },
          {
            answerSet: ["opt4"],
            response:
              "This is not correct. Sand does not absorb a lot of water. While a mixture of sand and loam will absorb more water than pure sand, it will still not hold as much water as pure clay.",
          },
        ],
      },
      {
        id: "crops-and-soil",
        time: 1,
        kind: "image",
        title: "Soil And Crops",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Clayey and Loamy soils are good at holding water. Thus they are used to grow crops like rice and wheat that require a lot of water.

    ![clayey loamy soil grow rice wheat](/learning-items/grade7/clayey-loamy-soil-grow-rice-wheat.jpeg)

    Sandy or Loamy soils have a lot of air and can drain water easily. Thus, they are used to grow cotton.
`,
        imagePath: "/learning-items/grade7/sandy-soil-cotton.jpeg",
      },
      {
        id: "pottery-soil-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        locked: true,
        title: "Final Soil Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![clayey soil makes pottery](/learning-items/grade7/clayey-soil-make-pottery.jpeg)

      Which soil is best for making pots, toys and statues?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "sandy soil",
          },
          {
            id: "opt2",
            text: "clayey soil",
          },
          {
            id: "opt3",
            text: "loamy soil",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is incorrect. ",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct__. ",
          },
          {
            answerSet: ["opt3"],
            response: "This is incorrect. ",
          },
        ],
      },
    ],
  },
  {
    id: " 10",
    title: "Respiration in Organisms",
    description:
      "Watch videos, try quizzes and view solutions to learn Chapter 10, Respiration In Organisms, in the Class 7 NCERT science book. ",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter10-thumbnail-2.png",
    items: [
      {
        id: "lungs-video",
        kind: "video",
        time: 8,
        title: "Chat With Dr. Sanjay On Lungs",
        instructions: dedent`
    In this video, Dr. Sanjay shares stories from the emergency room in a hospital. He talks about helping a young boy who could not breathe.

    While sharing this story, Dr. Sanjay also talks about how we breathe and why we breathe.
    `,
        videoId: "KHPF091ZM-o",
      },
      {
        id: "trachea-cage-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![skeleton lungs quiz](/learning-items/grade7/trachea-2.jpeg)

      Another name for the windpipe is _________.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "nostril",
          },
          {
            id: "opt2",
            text: "trachea",
          },
          {
            id: "opt3",
            text: "alveoli",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
          This is incorrect. Nostrils are the opening in the nose that let air inside our body.
        `,
          },
          {
            answerSet: ["opt2"],
            response: "__Correct__. Another name for the windpipe is trachea.",
          },
          {
            answerSet: ["opt3"],
            response: dedent`
          This is incorrect. Alveoli are small bags in the lungs that transfer oxygen to our blood.
        `,
          },
        ],
      },
      {
        id: "how-do-we-breathe",
        kind: "video",
        time: 2,
        title: "How Do We Breathe?",
        instructions: dedent`
    We talked about this topic in the interview with Dr. Sanjay. Now let us look at it in more detail.

    __Inhaling__: When we inhale (or breathe in), air passes through our nose and mouth, goes into the windpipe, and then to our lungs. The lungs are located in the chest and are surrounded by bones called the rib cage, which protect the lungs. A muscular sheet called diaphragm is located below the lungs and forms the bottom of the chest.

    __Exhaling__: When we exhale (or breathe out), air passes from the lungs to the wind pipe and then out of our body through our nose or mouth.
     `,
        videoId: "-MCeNo-tco4",
        startTime: 190,
        endTime: 299,
      },
      {
        id: "rib-cage-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![skeleton lungs quiz](/learning-items/grade7/lungs-quiz-rib-cage.jpeg)

      The bones surrounding the lungs are called _________.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "pelvic bones",
          },
          {
            id: "opt2",
            text: "bird cage",
          },
          {
            id: "opt3",
            text: "nic cage",
          },
          {
            id: "opt4",
            text: "rib cage",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
          This is incorrect. The pelvic bones are shown in the image below. We use these bones to sit.

          ![skeleton pelvic bones](/learning-items/grade7/lungs-quiz-pelvic-bones.jpeg)
        `,
          },
          {
            answerSet: ["opt2"],
            response: "This is incorrect. A bird cage has got nothing to do with lungs.",
          },
          {
            answerSet: ["opt3"],
            response: dedent`
          This is incorrect. Nic Cage is a (somewhat) famous actor in America.

          ![nic cage](/learning-items/grade7/lungs-quiz-nic-cage.jpeg)
        `,
          },
          {
            answerSet: ["opt4"],
            response: dedent`
          __Correct__. The bones surrounding the lungs are called rib cage.

          ![skeleton rib cage](/learning-items/grade7/lungs-quiz-rib-cage-solution.jpeg)
        `,
          },
        ],
      },
      {
        id: "cavity",
        time: 1,
        kind: "image",
        title: "What Is A Cavity?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A cavity is an empty space in a solid object.

    You can find cavities in teeth and trees. Also, the word _cave_ and _cavity_ are related. A cave is a cavity or hole in the earth.

    We will soon use the word _cavity_ to learn about the _nasal cavity_ and the _chest cavity_.
    `,
        imagePath: "/learning-items/grade7/cavities-teeth-tree-cave.jpeg",
      },
      {
        id: "nasal-cavity",
        time: 1,
        kind: "image",
        title: "What Is The Nasal Cavity?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The nasal cavity is a large air filled space above and behind the nose, and in the middle of the face.
    `,
        imagePath: "/learning-items/grade7/nasal-cavity.jpeg",
      },
      {
        id: "chest-cavity",
        time: 1,
        kind: "image",
        title: "What Is The Chest Cavity?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The chest cavity is surrounded by the rib cage, the backbone and the breast bone (which is a flat bone running down the centre of the chest).

    The chest cavity is separated from the intestines in the abdomen by a sheet of muscle called the diaphragm.
    `,
        imagePath: "/learning-items/grade7/chest-cavity-2.jpeg",
      },
      {
        id: "diaphragm",
        kind: "video",
        time: 2,
        title: "Diaphragm",
        instructions: dedent`
    The speaker in this video will use some big, tough words. Do not worry about them. In fact, you should __watch this video on mute__ (with no sound). Simply observe how the diaphragm moves when we breathe.

    Diaphragm  is a sheet of muscle, which separates the chest from the intestines.

    The _"G"_ is silent in the word diaphragm. This is similar to words like _align_ and _high_.

    __When we inhale__, the ribcage moves outwards and upwards and the diaphragm moves down. This creates space for lungs to expand.

    __When we exhale__, the reverse happens. The ribcage moves inwards and downwards and the diaphragm moves up.`,
        videoId: "hp-gCvW8PRY",
        endTime: 66,
      },
      {
        id: "diaphragm-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      Diaphragm can be found in the _________.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "cranial cavity",
          },
          {
            id: "opt2",
            text: "chest cavity",
          },
          {
            id: "opt3",
            text: "abdominal cavity",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
          This is incorrect. Cranial cavity is the space inside the skull.

          ![cranial cavity](/learning-items/grade7/cranial-cavity-quiz.jpeg)
        `,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
          __Correct__. Diaphragm forms the bottom of the chest cavity.

          ![chest cavity](/learning-items/grade7/chest-cavity-quiz.jpeg)
        `,
          },
          {
            answerSet: ["opt3"],
            response: dedent`
          This is incorrect. Abdominal cavity contains our stomach and intestines and is located below the chest cavity.

          ![abdominal cavity](/learning-items/grade7/abdominal-cavity-quiz.jpeg)
        `,
          },
        ],
      },
      {
        id: "ribs-movement-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Quiz On Ribs",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      During exhalation (or breathing out), the ribs
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "move outwards",
          },
          {
            id: "opt2",
            text: "move downwards",
          },
          {
            id: "opt3",
            text: "move upwards",
          },
          {
            id: "opt4",
            text: "do not move",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is incorrect. The ribs move outwards while breathing in or inhalation.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. When we exhale or breathe out our ribs move inwards and downwards.",
          },
          {
            answerSet: ["opt3"],
            response: "This is incorrect. The ribs move upwards while breathing in or inhalation.",
          },
          {
            answerSet: ["opt4"],
            response: "This is incorrect. Ribs move when we breathe.",
          },
        ],
      },
      {
        id: "cells",
        time: 1,
        kind: "image",
        title: "What Are Cells?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Let us remind ourselves of the word _cells_.

    Our body is made up of a lot of cells. You have more than 30 trillion cells in your body.

    Cells have an amazing ability to make copies of themselves (almost like a photocopy machine). Also, they can combine to make the different parts of our body, like cheek, skin, blood and bones.`,
        imagePath: "/learning-items/grade7/cells-cheek-skin-blood.jpeg",
      },
      {
        id: "why-do-we-breathe",
        time: 2,
        kind: "image",
        title: "Why Do We Breathe Air?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here is a 6-step process that explains why we breathe air:
     1. We need energy to do things.
     2. That means our cells need energy.
     3. We eat food for energy.
     4. Our blood carries glucose (or simplified food) to all cells of our body.
     5. Cells convert glucose into energy. To do this they need oxygen. This step is called __Respiration.__
     6. We breathe air because it has oxygen.
    `,
        imagePath: "/learning-items/grade7/why-do-we-breathe-3.jpeg",
      },
      {
        id: "respiration",
        time: 1,
        kind: "image",
        title: "What Is Respiration?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The process of breaking down food into energy is called __Respiration__.

    To help you remember this, we made a GIF.

    ![food to energy respiration](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/food-to-energy-respiration-gif-compressor.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "aerobic-respiration",
        time: 1,
        kind: "image",
        title: "What is Aerobic Respiration?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    __Respiration__ means converting food to energy.

    __Aerobic__ means in the presence of air or oxygen.

    Thus, __aerobic respiration__ means converting food to energy in the presence of oxygen.

    You and I and all of the rest of humans use aerobic respiration to convert our food to energy.
    `,
        imagePath: "/learning-items/grade7/aerobic-respiration.jpeg",
      },
      {
        id: "aerobic-respiration-how-to-remember",
        time: 1,
        kind: "image",
        title: "How To Remember Aerobic Respiration?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This phrase, __aerobic respiration__, can be tough to remember. Here is one way to remember it.

    __Aero__ means air.

    Think of the word _Aeroplane_, or a plane that moves through the air.

    Thus, aerobic respiration means respiration in the presence of oxygen.
    `,
        imagePath: "/learning-items/grade7/aero-means-air-aerobic-respiration.jpeg",
      },
      {
        id: "why-do-people-breathe-fast-when-they-run",
        kind: "textResponse",
        time: 3,
        title: "Quiz On Running",
        short: true,
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`

    ![running athlete](/learning-items/grade7/why-we-breathe-fast-when-we-run.jpeg)

    Why does an athlete breathe faster and deeper than usual after finishing the race?`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            When we run, our body needs more energy than when we do during other tasks like sleeping.

            To get energy, the cells in our body need to convert glucose into energy. To do that our cells need oxygen.

            Now since the cells need more energy, they need to convert more glucose into energy, and thus the cells need more oxygen.

            Since oxygen is part of the air, the athlete breathes faster and deeper after running to take in more oxygen into their body.
            `,
              },
            ],
          },
        },
      },
      {
        id: "anaerobic-respiration",
        time: 1,
        kind: "image",
        title: "What is Anaerobic Respiration?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    __Respiration__ means converting food to energy.

    __Anaerobic__ means in the absence of air or oxygen.

    Thus, __anaerobic respiration__ means converting food to energy without using oxygen.

    Yeast, a micro-organism used to make alcohol and beer, uses anaerobic respiration.
    `,
        imagePath: "/learning-items/grade7/anaerobic-respiration.jpeg",
      },
      {
        id: "anaerobic-respiration-how-to-remember",
        time: 1,
        kind: "image",
        title: "How To Remember Anaerobic Respiration?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This phrase, __anaerobic respiration__, can be tough to remember. Here is one way to remember it.

    The first two letters __"an"__ in anaerobic mean without.

    Think of the word _Analphabet_, which means a person without the letters of the alphabet or someone who cannot read or write.

    And we know that __aero__ means air or oxygen.

    Thus, __anaerobic__ means without oxygen.
    `,
        imagePath: "/learning-items/grade7/anaerobic-respiration-remember.jpeg",
      },
      {
        id: "difference-aerobic-anaerobic",
        kind: "textResponse",
        time: 3,
        title: "Difference Between Aerobic and Anaerobic",
        short: true,
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    What is the main difference between aerobic and anaerobic respiration?`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Koushiki",
                imagePath: "/fake-responses/koushiki.png",
                response: dedent`
            Aerobic means with oxygen.

            Anaerobic means without oxygen.

            That is the main difference.

            To remember the meaning of aerobic, I just think of an aeroplane, which flies in the air. Thus aerobic means with air or oxygen.

            And anaerobic is just the opposite of that.
            `,
              },
            ],
          },
        },
      },
      {
        id: "yeast-anaerobes",
        time: 1,
        kind: "image",
        title: "Yeast Can Live Without Air",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This is what dried and powdered yeast looks like. It is used to make beer and alcohol.

    ![dried powdered yeast](/learning-items/grade7/dried-powder-yeast.jpeg)

    If you put yeast under the microscope, this is what they look like.

    ![yeast under microscope](/learning-items/grade7/yeast-under-microscope.jpeg)

    Yeast use __anaerobic respiration__.

    That means that yeast do not need oxygen to convert food into energy. They can survive without air. Here is the anaerobic respiration equation again:

    _Glucose (in the absence of oxygen) --> Energy + Carbon dioxide + Alcohol_

    One of the things produced here is alcohol. Thus, yeast are used to make beer and wine.

    By the way, because yeast use anaerobic respiration they are called __anaerobes__.
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "human-muscles-anaerobic-respiration",
        time: 2,
        kind: "image",
        title: "Our Muscles (Sometimes) Do Not Need Oxygen",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    When we run or do heavy exercise, our muscles need a lot of energy. Thus we breathe fast so we can take in more oxygen to convert more glucose into energy.

    But even with breathing fast, the supply of oxygen is limited.

    So muscles convert glucose into energy _without oxygen_ to fulfill the demand for additional energy; this process, as you know, is called anaerobic respiration.

    In muscles, this process also produces something called lactic acid.

    Lactic acid is poisonous and can cause muscles to stop working. This is why we feel a burning sensation or soreness in our muscles during heavy exercise.

    ![human muscles anaerobic respiration](/learning-items/grade7/human-muscles-anaerobic-respiration.jpeg)

    By the way, animals like Gazelles and Deer need a lot of energy when they are being chased by a predator like Cheetah.

    In such situations Gazelles and Deer also go through anaerobic respiration.
    `,
        imagePath: "/learning-items/grade7/gazelle-deer-anaerobic-respiration.jpeg",
      },
      {
        id: "lactic-acid-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      During heavy exercise, we get muscle pain in the legs due to the buildup of ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "carbon dioxide",
          },
          {
            id: "opt2",
            text: "lactic acid",
          },
          {
            id: "opt3",
            text: "alcohol",
          },
          {
            id: "opt4",
            text: "water",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is incorrect. Carbon dioxide does not cause muscle pain.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. When our muscles convert glucose to energy in the absence of oxygen, they also produce Lactic Acid. This acid is poisonous and causes muscle pain.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is incorrect. Alcohol is produced by Yeast, but it is not produced in human muscles.",
          },
          {
            answerSet: ["opt4"],
            response: "This is incorrect. ",
          },
        ],
      },
      {
        id: "what-do-we-breathe-out",
        kind: "video",
        time: 2,
        title: "Do We Breathe Out Oxygen? Yes.",
        instructions: dedent`
    So we know that we breathe in oxygen and breathe out carbon dioxide.

    Actually, that is not completely correct.

    __Breathing In__: When we breathe in air, we breathe in all gases that make up the air. Oxygen is 21% of air. So 21% of every breath we inhale is oxygen. And only 0.04% of air is carbon dioxide. So 0.04% of every breath we take in is carbon dioxide.

    __Breathing Out__: When we exhale, we breathe out a mixture of gases. 4 to 6% of the air we exhale is carbon dioxide. And 16% of the air we exhale is oxygen. We use some of the oxygen we inhaled, and the rest we simply breathe out.`,
        videoId: "TA2s6uo_vTQ",
      },
      {
        id: "detecting-carbon-dioxide",
        kind: "video",
        time: 2,
        title: "Detecting Carbon dioxide",
        instructions: dedent`
    4 to 6% of every breath we exhale is carbon dioxide. This video shows a simple experiment to detect the presence of carbon dioxide in our breath.

    To do this experiment you will need limewater. In Hindi that means chuna (limestone) mixed with some water.`,
        videoId: "xvQNaAFkE6c",
        startTime: 22,
        endTime: 79,
      },
      {
        id: "read-and-draw",
        kind: "imageResponse",
        time: 10,
        locked: true,
        title: "Read and Draw",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    From your science book, read sections _10.5, 10.6 and 10.7_ on pages 115 and 116. These are really short sections that you will be able to read in a few minutes.

    Then use a _pencil and paper_ to draw a cartoons of what you have learned from these sections. Take a picture of that cartoon and upload it here.`,
        /*
    hacks: {
      afterBody: {
        preface: 'The image below was made and uploaded by Prabsimar, a student of class 6 at Ahlcon International School.',
        show: 'locked',
        feedbackImagePath: '/image-response-feedback/dl-components-of-food.jpeg',
      }
    }
    */
      },
    ],
  },
  {
    id: " 12",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter-12-thumbnail.jpg",
    title: "Reproduction in Plants",
    description:
      "Learn Chapter 12, Reproduction In Plants, in the Class 7 NCERT science book by watching videos, answering questions, and viewing solutions.",
    items: [
      {
        id: "chapter-12-video-poem",
        kind: "video",
        time: 3,
        title: "Asexual Reproduction in Plants",
        instructions: dedent`
      This video is a poem about asexual reproduction in plants.

      Some people I know get nervous when the word _sex_ is used around them. I am sure you are not one of them.

      We know that plants can make more of themselves through seeds. But plants can also reproduce through stems and leaves; in other words, plants can reproduce asexually. Let us watch to learn more.
    `,
        videoId: "1bzUlxAMiqI",
      },
      {
        id: "spore-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Pick The Correct Option",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Which of the following plants uses spore propagation to reproduce?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Rose",
          },
          {
            id: "opt2",
            text: "Fern",
          },
          {
            id: "opt3",
            text: "Bread Mould",
          },
          {
            id: "opt4",
            text: "Apple Tree",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. The stems of rose plants are used for reproduction. Since a stem is involved in reproduction, this process is  called Vegetative Reproduction.",
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        __Correct__. Fern is a plant that does not have seeds and uses spores for reproduction. Here is a picture of fern and spores.

        ![fern spore](/learning-items/grade7/fern-spore.jpeg)`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`
        __Correct__.  Mould is a fungus. That just means that mould does not have chlorophyll and cannot make its own food.

         Mould grows on bread because bread provides a very good source of food for mould. You cannot see them, but there are millions of mould spores in the air around you. These mould spores can settle on the bread and multiply into a gross looking fungi.
        ![mould bread fungi spore](/learning-items/grade7/mould-bread-fungi.jpeg)`,
          },
          {
            answerSet: ["opt4"],
            response:
              "This is not correct. Apples have seeds in them. These seeds when planted in soil with sunlight and water grow into a new apple tree. Since seeds are involved in this reproduction, this process is called Sexual Reproduction.",
          },
        ],
      },
      {
        id: "difference-asexual-sexual",
        kind: "textResponse",
        time: 3,
        short: true,
        title: "Asexual and Sexual Reproduction",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![sexual reproduction plants involves seeds](/learning-items/grade7/sexual-reproduction-plants-seb-apple.jpeg)

    What is the main difference between Asexual and Sexual Reproduction in plants?

    Write your answer in the space below and then tweet it with the #maindifference`,
        hacks: {
          afterBody: {
            preface: "Here are responses from other students who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            Sexual reproduction involves seeds, example seb (apple). Asexual does not. #maindifference`,
              },
              {
                studentName: "Koushiki",
                imagePath: "/fake-responses/koushiki.png",
                response: dedent`
            Plants that reproduce through stems, leaves and spores do so asexually. Plants like Apple trees need seeds. #maindifference`,
              },
            ],
          },
        },
      },
      {
        id: "reproduction-from-leaves",
        kind: "video",
        time: 2,
        title: "Making More Plants From Leaves",
        instructions: dedent`
      Bryophyllum is a plant that is found in Asia and South Africa. It has buds on the edges of its leaves.

      If a bryophyllum leaf is placed on moist soil, a new plant is produced from each of the buds on the leaf.

      Notice how no seeds were needed to produce a new plant here. That is why this form of reproduction is called Asexual Reproduction.
    `,
        videoId: "bDuYDk5dfzU",
        startTime: 12,
        endTime: 120,
      },
      {
        id: "growing-roses-from-stems",
        kind: "video",
        time: 4,
        title: "Growing A New Rose Plant From A Stem",
        instructions: dedent`
      Take a piece of rose stem and cut it along with the node — a node is a place on the stem from where the leaves grow; by the way this piece of stem is called cutting.

      Then sow the cutting in soil and water it. After a few days new roots will come out from the bottom of the stem. After some more days the buds on the stem will give rise to new leaves and then to new rose flowers.

      Notice how no seeds were needed to produce a new rose plant here. That is why this form of reproduction is called Asexual Reproduction.
    `,
        videoId: "GyRi9n7beqI",
        startTime: 37,
        endTime: 257,
      },
      {
        id: "bryophyllum-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![bryophyllum reproduce leaves](/learning-items/grade7/bryophyllum-asexual-reproduction-vegetative-propagation.jpeg)

    Byrophyllum can reproduce through its ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "stem",
          },
          {
            id: "opt2",
            text: "leaves",
          },
          {
            id: "opt3",
            text: "roots",
          },
          {
            id: "opt4",
            text: "flower",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. Bryophyllum reproduces through its leaves and not stem. Roses reproduce through their stems.",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct__. Bryophyllum reproduces through its leaves.",
          },
          {
            answerSet: ["opt3"],
            response: "This is not correct.",
          },
          {
            answerSet: ["opt4"],
            response:
              "This is also not correct. Bryophyllum reproduces through its leaves and not its flowers.",
          },
        ],
      },
      {
        id: "vegetative-parts-plant",
        time: 1,
        kind: "image",
        title: "What Are Vegetative Parts Of A Plant?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The science book say something on _page 133_ that is hard to remember.

    It says that __leaves, roots and stems__ are the _vegetative parts of a plant_.

    It also says that the __flower__ is the _reproductive part of a plant_.

    Here is one easy way to remember this. Think of vegetables like spinach and carrots.

    Spinach consists of leaves and carrot is a root. When we eat vegetables like spinach (leaves), and carrots (root), we are eating the vegetative parts of the plant.

    ![vegetative parts plant leaves roots stem](/learning-items/grade7/vegetative-parts-plant-leaves-roots-stems.jpeg)

    And then I hope the GIF below gets stuck in your head and helps you remember that the flower is the reproductive part of the plant.

    ![flower reproductive part plant](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/flower-reproductive-part-of-plant2.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "vegetative-propagation",
        time: 1,
        kind: "image",
        title: "What is Vegetative Propagation?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We know that vegetative parts of plant include leaves, roots and stems.

    And one meaning of the word _propagation_ is to reproduce.

    So vegetative propagation is the reproduction of plants from vegetative parts like leaves, roots and stems. Examples include rose (from stem) and bryophyllum (from leaves).

    Also, since no seeds are involved here, vegetative propagation is categorized as asexual reproduction.
    `,
        imagePath: "/learning-items/grade7/vegetative-propagation-rose-bryophyllum.jpeg",
      },
      {
        id: "reproductive-part-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The reproductive part of the plant is ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "leaf",
          },
          {
            id: "opt2",
            text: "root",
          },
          {
            id: "opt3",
            text: "stem",
          },
          {
            id: "opt4",
            text: "flower",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is not correct. Leaf is a vegetative part of a plant.",
          },
          {
            answerSet: ["opt2"],
            response: "This is not correct. Root is a vegetative part of a plant.",
          },
          {
            answerSet: ["opt3"],
            response: "This is not correct. Stem is a vegetative part of a plant.",
          },
          {
            answerSet: ["opt4"],
            response: "__Correct__. Flower is a reproductive part of a plant.",
          },
        ],
      },
      {
        id: "vegetative-propagation-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Production of new individuals from the vegetative part of a plant is called ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "sexual reproduction",
          },
          {
            id: "opt2",
            text: "vegetative propagation",
          },
          {
            id: "opt3",
            text: "spore formation",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. Sexual reproduction require seeds to grow a new plant. Examples include apple trees, which need seeds to grow.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct.__ Production of new individuals from the vegetative part of a plant is called vegetative propagation. For example a rose plant can be grown from rose stem; and stem is a vegetative part of a plant.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is not correct. Spore formation involves organisms like the fern plant and fungi.",
          },
        ],
      },
      {
        id: "budding-asexual",
        kind: "video",
        time: 2,
        title: "Budding - Asexual Reproduction",
        instructions: dedent`
      Yeast is used to bake breads. Here is what a block of compressed yeast from a bakery looks like.

     ![yeast compressed bakery](/learning-items/grade7/baker-yeast-cake-budding.jpeg)

      If we mix a pinch of this yeast in water with some sugar, and see it under the microscope, we will find something similar to this video below.

      A small bulb-like project comes out of yeast cell; this is called a bud. It then gets detached from the parent and forms a new cell. This process is called __budding__.

      Notice how no seeds are involved in this form of reproduction. Thus it is a form of Asexual Reproduction. By now, we have come across 3 different types of Asexual Reproduction:
       - Vegetative Propagation (rose, bryophyllum)
       - Spore Formation (fern, fungi)
       - Budding (yeast)
    `,
        videoId: "GFEgB_ytDZY",
        startTime: 108,
        endTime: 183,
      },
      {
        id: "fragmentation-asexual",
        time: 1,
        kind: "image",
        title: "Fragmentation — Asexual Reproduction",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here is what algae looks like. A particular type of algae called Spirogyra is shown in this picture.

    ![algae fragmentation](/learning-items/grade7/algae-fragmentation.jpeg)

    They reproduce through a technique called __fragmentation__, in which an algae grows and breaks into two or more fragments.

    So thus far, we have studied the following 4 types of Asexual Reproduction:
     - Vegetative Propagation (rose, bryophyllum)
     - Spore Formation (fern, fungi)
     - Budding (yeast)
     - Fragmentation (algae)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "draw-what-you-have-learned",
        kind: "imageResponse",
        time: 5,
        title: "Draw and Share",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Use a _pen and paper_ to draw a picture that describes the 4 methods of asexual reproduction.

    Then take a photo of the drawing from your phone and upload it here.`,
        hacks: {
          afterBody: {
            show: "locked",
            preface:
              "The picture below was made and uploaded by Koushiki, a student of Class 6 at Ahlcon International School.",
            feedbackImagePath:
              "/learning-items/grade7/asexual-reproduction-vegetative-propagation-budding-fragmentation-spores-2.jpeg",
          },
        },
      },
      {
        id: "sexual-reproduction-video",
        kind: "video",
        time: 6,
        title: "Sexual Reproduction in Plants",
        instructions: dedent`
      Sexual reproduction in plants involves seeds and flowers.

      Let us watch this video recorded at a flower market in Thailand to see how that works.
    `,
        videoId: "EArZXsRXsj4",
      },
      {
        id: "pollination-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The transfer of pollen grains from the anther to the stigma of the same flower or another flower of the same kind is known as ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "vegetative propagation",
          },
          {
            id: "opt2",
            text: "pollination",
          },
          {
            id: "opt3",
            text: "fertilisation",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. Vegetative Propagation means reproduction through vegetative parts of the plant, like leaves and stems. Rose and Bryophyllum reproduce in this manner.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct.__ The transfer of pollen grains from the anther (male part) to the stigma (female part) of a flower is known as pollination.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is not correct. Fertilisation is the when the male reproductive cells (from pollen) and female reproductive cells (from ovules) combine in a plant. It is ok if you do not know much about this topic yet. We will learn about it soon.",
          },
        ],
      },
      {
        id: "stamen-remember",
        time: 1,
        kind: "image",
        title: "Stamen — A Way To Remember",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Stamen is the male part of the flower. Here is a way to remember that:

    Stamen has the word _men_ in it.

    Also, stamen consists of anther at the top, supported by filament at the bottom.

    Anther produces pollen, which contain the male sex cells of the plant. We will soon see that these male sex cells are necessary to produce a new seed and through that seed a new plant.
    `,
        imagePath: "/learning-items/grade7/stamen-anther-filament-pollen.jpeg",
      },
      {
        id: "pistil-identify-parts",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Identify Parts of Pistil",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Pistil is the Female Part of flower.

    It produces the female sex cells. We will soon see that these female sex cells are necessary to produce a new seed and through that seed a new plant.

    For now, can you identify the 4 parts of the Pistil from the image below?
    ![pistil parts](/learning-items/grade7/pistil-stigma-style-ovary-ovules.jpeg)
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "(1)Style (2)Stigma (3)Ovary (4)Ovule",
          },
          {
            id: "opt2",
            text: "(1)Stigma (2)Style (3)Ovary (4)Ovule",
          },
          {
            id: "opt3",
            text: "(1)Stigma (2)Style (3)Ovule (4)Ovary",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is not correct. (1) is Stigma and (2) is Style.",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct.__ (1)Stigma (2)Style (3)Ovary (4)Ovule.",
          },
          {
            answerSet: ["opt3"],
            response: "This is not correct. (3) is Ovary and (4) is Ovule.",
          },
        ],
      },
      {
        id: "pollination-fertilisation",
        time: 5,
        kind: "image",
        title: "How Flowers Turn To Fruits With Seeds",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Let us start this section by looking at pollination.

    Pollen from the male part of one flower (anther) travels to the female part of another flower (stigma) by sticking on animals like bees. This process is called __pollination__.

    ![pollination stamen pistil pollen anther](/learning-items/grade7/pollination-pollen-anther-stamen.jpeg)

    Once the pollen lands on stigma, the contents of pollen move from the stigma to the style and then into the ovules.

    Remember, the contents of pollen are in the __ovules__ now.
    ![pollen moves from stigma to style to ovules](/learning-items/grade7/pollen-moves-stigma-style-ovary2.jpeg)

    Now to understand the rest of this story, we have to learn __3 new words__:
     - Gametes
     - Zygote
     - Embryo

    ![gametes zygote embryo](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/gametes-zygote-embryo-gif-final.gif)

    Let us start with the first two words: __Gametes and Zygote__.

    Now we have seen thus far that the contents of pollen have moved to the ovules.

    Pollen has some cells called __Male Gametes__. Ovules have some cells called __Female Gametes__.

    Gametes means cells that can combine with others to reproduce.

    So when male gametes from pollen and female gametes from ovules combine, they have the ability to reproduce and create a new organism.

    The result is called a Zygote, which is just a fused cell. Or a joined cell.

    This process, by the way, is called __fertilisation__.
    ![fertilisation male gametes female gametes zygote](/learning-items/grade7/fertilisation-male-gamete-female-gamete-zygote2.jpeg)

    The zygote grows into something called an __Embryo__.

    An embryo is an important part of the new seed and can be thought of as a young, developing plant.

    This new seed will help to make new plants in the future.
    ![zygote embryo seed](/learning-items/grade7/zygote-embryo-seed2.jpeg)

    So we have seen that the contents of pollen move into the ovules. This leads to fertilisation.

    And then the Ovules in the flower turn into seeds. Also, the Ovary in the flower turns into the fleshy part of the fruit that surrounds the seed.
   ![ovules seeds ovary fruit](/learning-items/grade7/ovules-seed-ovary-fruit.jpeg)

    This is how flowers turn into fruits with seeds.

    The fruit can now be eaten by animals in the forest, who will then drop the seeds somewhere, and if enough sunlight, soil and water are available, that seed will grow into a new plant.

    This process of plant reproduction through seeds is known as __Sexual Reproduction__.
    `,
        imagePath: "/learning-items/grade7/sexual-reproduction-plants-flowers-fruits-seeds.jpeg",
      },
      {
        id: "fertilisation-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The fusion of male and female gametes is termed as ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "pollination",
          },
          {
            id: "opt2",
            text: "zygote",
          },
          {
            id: "opt3",
            text: "fertilisation",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. Pollination happens when pollen from the male part of one flower (anther) travels to the female part of another flower (stigma) by sticking on insects and animals like bees. ",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is half correct. Male gametes and female gametes join together to create a zygote. The other correct answer can also be fertilisation.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. The fusion or joining together of male gametes and female gametes is called fertilisation. This creates a zygote (fused cell), which then grows into the embryo and seed.",
          },
        ],
      },
      {
        id: "describe-fertilisation",
        kind: "textResponse",
        time: 5,
        title: "Fertilisation Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    How does the process of fertilisation take place in flowers?`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            Flowers have a male part called Stamen. Stamen has anther, which also has pollen(sneeze).

            Flowers also have a female part called Pistil. Pistil has stigma, style, ovary and ovules.

            Ok, so when a bee comes to a flower, the pollen sticks to it. When it goes to another flower of the same type, it transfers the pollen on to that flower.

            Now the cells inside pollen move from stigma to style and then to the ovules.

            Then the male reproductive cells (or male gametes) from the pollen combine with the female reproductive cells (or female gametes) in the Ovule. This is called fertilisation and produces and joint cell called zygote.

            This cell can grow to form a seed. An important part of the seed is an embryo.
            `,
              },
            ],
          },
        },
      },
      {
        id: "flowers-fruits",
        time: 1,
        kind: "image",
        title: "From Flowers To Fruits",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We have seen in this chapter that flowers turn to fruits.

    More specifically, here is what happens:
     - Ovules turn to seeds
     - Ovary turns to fruit

    One way to remember this is by inventing two new words:
     - __Ovuleeds__: Ovules turn to seeds
     - __Ovaruit__: Ovaries turn to fruit

    ![ovule seed ovary fruit ovuleeds ovaruit](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/ovule-seeds-ovary-fruit.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "ovary-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A mature ovary forms the  ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "seed",
          },
          {
            id: "opt2",
            text: "pistil",
          },
          {
            id: "opt3",
            text: "stamen",
          },
          {
            id: "opt4",
            text: "fruit",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is not correct. Ovules form seeds. A mature ovary forms fruits.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is not correct. Pistil is the female part of the flower. Ovary is a part of the pistil.",
          },
          {
            answerSet: ["opt3"],
            response: "This is not correct. Stamen is the male part of the flower.",
          },
          {
            answerSet: ["opt4"],
            response:
              "__Correct__. An ovary turns into fruit. You can recall the word __ovaruit__ to remember this.",
          },
        ],
      },
      {
        id: "seed-dispersal",
        kind: "video",
        time: 5,
        locked: true,
        title: "Seed Dispersal",
        instructions: dedent`
      Once a seed has been formed by the plant, the seed can grow into a new plant.

      To have the best chance of growing into a new plant, the seed needs to be far away from the parent. If the seed were to grow right next to the parent, there would be a lot of competition for sunlight and water between the parent and the seed.

      Thus plants benefit from seed dispersal. That simply means movement of seed far away from the parent.

      This can happen in a few ways:
       - by wind
       - by animals
       - by water
    `,
        videoId: "xY4JFOSuqvY",
        startTime: 23,
        endTime: 304,
      },
    ],
  },
  {
    id: " 11",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter11-thumbnail2.jpg",
    title: "Transportation in Animals and Plants",
    description:
      "Learn Chapter 11, Transportation In Animals And Plants, in the Class 7 NCERT science book by watching videos, answering questions, and viewing solutions.",
    items: [
      {
        id: "components-of-blood",
        time: 1,
        kind: "image",
        title: "Blood Components",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    There are 4 main components of blood: Red Blood Cells, White Blood Cells, Platelets, and Plasma.

    This image shows what they look like. We will discuss each one of them in this chapter.`,

        imagePath: "/learning-items/grade7/components-of-blood-2.jpeg",
      },
      {
        id: "chapter-11-video-rbc",
        kind: "video",
        time: 2,
        title: "Red Blood Cells",
        instructions: dedent`
      Red Blood Cells (RBCs) are an important part of our blood.

      RBCs also have an incredible substance inside them called Haemoglobin, which can join very easily with oxygen.

      Thus, red blood cells can take oxygen to all parts of our body. Here is a song to help you remember the function of red blood cells.
    `,
        videoId: "Y2_A18dqeFY",
      },
      {
        id: "rbc-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Red Blood Cells contain ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "White Blood Cells",
          },
          {
            id: "opt2",
            text: "Haemoglobin",
          },
          {
            id: "opt3",
            text: "Platelets",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is not correct. Red Blood Cells and White Blood Cells are separate parts of blood.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Haemoglobin gives RBCs their red colour and can easily bind with oxygen.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is not correct. Red Blood Cells and Platelets are separate parts of blood.",
          },
        ],
      },
      {
        id: "white-blood-cells",
        kind: "video",
        time: 1,
        title: "White Blood Cells",
        instructions: dedent`
      White Blood Cells help our body fight against germs. This is a video of a White Blood Cell killing a bacterium (_singular of bacteria_).
    `,
        videoId: "JnlULOjUhSQ",
      },
      {
        id: "platelets",
        time: 1,
        kind: "image",
        title: "Platelets",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Have you ever fallen down and started to bleed?

    If so, you may have noticed that a dark red clot forms to prevent blood from flowing outside your body. Platelets help create that clot.
    `,
        imagePath: "/learning-items/grade7/platelets-blood-clot.jpeg",
      },
      {
        id: "platelets-name",
        time: 1,
        kind: "image",
        title: "Why are Platelets called Platelets?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This is what  platelets look like when seen through a microscope.

    They get their name because they look like small plates.
    `,
        imagePath: "/learning-items/grade7/platelets-name-small-plates-2.jpeg",
      },
      {
        id: "platelets-shape",
        time: 1,
        kind: "image",
        title: "What Happens During an Injury?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    When blood begins to flow out of our body due to an injury, platelets start to look like an octopus, with long tentacles.

    This new shape helps the platelets form a seal that stops blood from flowing out of our body.
    `,
        imagePath: "/learning-items/grade7/platelets-shape-clot.jpeg",
      },
      {
        id: "platelets-quiz",
        kind: "textResponse",
        time: 5,
        short: true,
        title: "Platelets Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    What will happen if there are no platelets in our body?

    Write your answer in the box below.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            I just learned that platelets help us when we get injured.

            They make that solid, red-looking substance on the skin that stops blood from flowing out of our body.

            So if there are no platelets left in our body, we should be very careful, as even a small injury will not heal.
            `,
              },
            ],
          },
        },
      },
      {
        id: "platelets-function",
        kind: "video",
        time: 1,
        title: "How Platelets Work",
        instructions: dedent`
      This video shows how platelets work when blood starts flowing out of our body.

      There are some tough vocabulary words in this video. __Do not__ worry about them. Focus on the animation to see how platelets work.
    `,
        videoId: "KtmHdGRBE2E",
        startTime: 26,
      },
      {
        id: "plasma",
        time: 1,
        kind: "image",
        title: "Plasma",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Plasma is the fluid part of blood in which all the rest of the blood components travel.
    `,
        imagePath: "/learning-items/grade7/plasma-function.jpeg",
      },
      /*{
    id: 'plasma-is-yellow',
    time: 1,
    kind: 'image',
    title: 'Can Blood be Yellow?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Yes. Well, at least part of the blood is yellow.

    In this image you see plasma after it was extracted from blood and kept in a bag. Clearly, plasma is yellow.
    `,
    imagePath: '/learning-items/grade7/plasma-is-yellow-2.jpeg',

  },*/ {
        id: "blood-components-centrifuge",
        time: 1,
        kind: "image",
        title: "Different Blood Components",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This image shows the 4 components of blood after we have separated them using a machine called centrifuge.

    As you can see, Plasma and Red Blood Cells make up most of the blood.

    And yes, if we extract plasma from blood, we find that it is yellow in colour.
    `,
        imagePath: "/learning-items/grade7/blood-components-centrifuge-2.jpeg",
      },
      {
        id: "blood-vessels",
        time: 1,
        kind: "image",
        title: "What are Blood Vessels",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    When I think of the word Vessel, I think of large ships that carry goods across oceans.

    In a similar way, Blood Vessels are tubes that carry blood to all parts of the body. Two main types of blood vessels are Arteries and Veins.
    `,
        imagePath: "/learning-items/grade7/blood-vessels.jpeg",
      },
      {
        id: "arteries-veins",
        time: 1,
        kind: "image",
        title: "What are Arteries and Veins?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Arteries and Veins are blood vessels; they carry blood in our body.

    Arteries carry oxygen-rich blood from the heart to all parts of the body.

    Veins carry carbon dioxide from all parts of the body back to the heart.
    `,
        imagePath: "/learning-items/grade7/arteries-veins.jpeg",
      },
      {
        id: "arteries-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     The blood from the heart is transported to all parts of the body by the ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Veins",
          },
          {
            id: "opt2",
            text: "Arteries",
          },
          {
            id: "opt3",
            text: "Post Man",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is not correct. Veins take blood from the body to the heart.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Blood from the heart is transported to all parts of the body through the arteries.",
          },
          {
            answerSet: ["opt3"],
            response: "This is clearly me trying to make a joke.",
          },
        ],
      },
      {
        id: "way-to-remember",
        time: 1,
        kind: "image",
        title: "Memorizing Arteries and Veins",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here is one way in which I try to remember the function of arteries and veins.

    The first letter in the word arteries is _"a"_ which reminds me that arteries take blood  away from the heart.

    Vein contains the letters _"in"_. That reminds me that veins take blood back in towards the heart.
    `,
        imagePath: "/learning-items/grade7/remember-arteries-veins.jpeg",
      },
      {
        id: "veins-valves",
        time: 1,
        kind: "image",
        title: "Veins have Valves",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Veins carry blood filled with carbon dioxide and other waste products from the body back to the heart.

    It is important that this blood flow only in the direction towards the heart, and not away from it.

    Thus veins have valves. A valve is a flap that allows a fluid like blood to flow in one direction.

    Muscles around veins squeeze to push the blood towards the heart. Once the blood has moved through a section of the vein, the valve closes which prevents that blood from flowing backwards.
    `,
        imagePath: "/learning-items/grade7/veins-have-valves.jpeg",
      },
      {
        id: "capillaries",
        time: 1,
        kind: "image",
        title: "Capillaries",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    When arteries reach cells they turn into really thin tubes called capillaries.

    The walls of capillaries are really thin.

    These thin walls allow capillaries to transfer water and oxygen from the  blood to cells; and also carbon dioxide from the cells to blood.`,
        imagePath: "/learning-items/grade7/capillaries.jpeg",
      },
      {
        id: "arteries-capillaries-veins",
        time: 1,
        kind: "image",
        title: "Arteries, Capillaries, Veins",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here is the relationship between arteries capillaries and veins.

    Arteries carry oxygen rich blood from the heart to our body.

    Upon reaching cells, arteries turn into capillaries. The capillaries supply our cells with oxygen and food. They also pick up waste products like carbon dioxide from cells.

    These capillaries then combine to become veins, which carry blood back to the heart.`,
        imagePath: "/learning-items/grade7/arteries-capillaries-veins.jpeg",
      },
      {
        id: "capillaries-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Arteries and Veins are joined by a network of ___________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Lungs",
          },
          {
            id: "opt2",
            text: "Capillaries",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is not correct. ",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct__. Capillaries are the thin tubes that join arteries and veins.",
          },
          {
            answerSet: ["opt3"],
            response: "This is clearly me trying to make a joke.",
          },
        ],
      },
      {
        id: "pulmonary-joints",
        time: 1,
        kind: "image",
        title: "What does Pulmonary mean?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The word _Pulmon_ simply means lungs.

    So when you think of pulmonary, think of lungs.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/pulmon-lung-gif2.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "pulmonary-arteries-veins",
        time: 1,
        kind: "image",
        title: "Pulmonary Arteries and Veins",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We know that Pulmonary means lungs.

    Thus, pulmonary arteries and veins connect the heart to the lungs.

    Arteries take blood away from the heart; thus blood goes from the heart to the lungs in the pulmonary arteries.

    Veins take the blood back to the heart; thus blood goes from the lungs to the heart in the pulmonary veins.`,
        imagePath: "/learning-items/grade7/pulmonary-arteries-veins.jpeg",
      },
      {
        id: "excretory-system",
        kind: "video",
        time: 2,
        title: "Excretory System",
        instructions: dedent`
      This poem in Hindi explains how Urine is excreted from our body.
    `,
        videoId: "Qc6JoAQotjQ",
        locked: true,
      },
    ],
  },
  {
    id: " 8",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter8-thumbnail.jpg",
    title: "Winds, Storms and Cyclones",
    description:
      "Learn Chapter 8, Winds, Storms and Cyclones, in the Class 7 NCERT science book by watching videos, answering questions, and viewing solutions.",
    items: [
      {
        id: "chapter-8-video",
        kind: "video",
        time: 5,
        title: "How Cyclones Work",
        instructions: dedent`
      In this video, we travel to Sri Lanka to learn how Cyclones get started in the ocean. We also witness the devastation they can cause on land.
    `,
        videoId: "F4ApOc4p-CE",
      },
      {
        id: "cyclone-location-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Cyclone Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Which of the following places is __unlikely__ to be affected by a cyclone?

     ![cities in india affected by cyclone](/learning-items/grade7/cyclones-in-india.jpeg)
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Delhi",
          },
          {
            id: "opt2",
            text: "Puri",
          },
          {
            id: "opt3",
            text: "Mangaluru",
          },
          {
            id: "opt4",
            text: "Chennai",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. Delhi is landlocked, which means that it is not next to the ocean. And thus it is unlikely to be affected by a cyclone.",
          },
          {
            answerSet: ["opt2"],
            response:
              "Puri is on the east coast of India. In 1999, Puri and other places in Odisha, were struck by a devastating category-5 cyclone named Pradip.",
          },
          {
            answerSet: ["opt3"],
            response:
              "Mangaluru is a port city in Karnataka and has unfortunately had to face many cyclones in the past.",
          },
          {
            answerSet: ["opt4"],
            response:
              "Chennai is the capital of Tamil Nadu and is a coastal city. In 2010, Cyclone Jal caused a lot of devastation in eastern parts of India, including in Chennai.",
          },
        ],
      },
      {
        id: "teach-a-friend-cyclones",
        kind: "textResponse",
        time: 5,
        short: true,
        title: "Teach a Friend",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![On the beach](/learning-items/grade7/on-beach-2.jpeg)

    Imagine a friend of yours watched the video on cyclones in the beginning of this chapter, but they are still confused about how cyclones form in the ocean.

    What will you tell your friend that can help them understand the process with which cyclones get started in the ocean? Write your answer in the box below.`,
      },
      {
        id: "air-exerts-pressure",
        kind: "video",
        time: 3,
        title: "Air Exerts Pressure",
        instructions: dedent`
      If you watch this video till the end, you will see a huge steel drum get crushed. Clearly, some force is crushing the drum. What is it? The answer is the pressure exerted by air from outside the drum. Let us find out how.

      Water was added to a drum and then that water was boiled. This meant that the water in the drum converted to steam and escaped.

      Then the drum was put in ice water. This caused any steam left inside the drum to condense back into water, thus reducing the amount of air inside the drum.

      Now less air inside the drum means that the air pressure inside the drum has decreased. But the air pressure outside the drum continues to be the same as before.

      This difference is air pressure crushes the steel drum.
    `,
        videoId: "JsoE4F2Pb20",
      },
      {
        id: "air-has-weight",
        kind: "video",
        time: 1,
        title: "Does Air have Weight?",
        instructions: dedent`
      Yes, it does. Watch this experiment that proves that air has weight.
    `,
        videoId: "o5LT_wfI98w",
        startTime: 18,
      },
      {
        id: "air-pressure-equals-car",
        time: 2,
        kind: "image",
        title: "How much pressure does the air exert?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Imagine a pillar of air above your head. Further imagine that this pillar continues to the edge of the atmosphere.

    ![pillar of air](/learning-items/grade7/imagine-a-pillar-of-air.jpeg)

    We have seen that air has weight. So that means that this pillar of air must also have some weight. And all of this weight above our head must exert some pressure on us.

    The pressure exerted by the air above of our head is similar to the pressure exerted on us if we were carrying a car on our head.`,

        imagePath: "/learning-items/grade7/air-pressure-similar-to-a-car.jpeg",
      },
      {
        id: "why-dont-we-get-crushed",
        time: 2,
        kind: "image",
        title: "Why dont we feel all that air pressure?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We experience a lot of air pressure from the air around us. But the air pressure in our lungs, ears and stomach is the same as the air pressure outside our bodies, which ensures that we don’t get crushed.`,
        imagePath: "/learning-items/grade7/why-dont-we-feel-air-pressure.jpeg",
      },
      {
        id: "holes-in-banners",
        kind: "textResponse",
        time: 5,
        short: true,
        title: "Air Pressure Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![holes in banners](/learning-items/grade7/wind-holes-banners.jpg)

    Why are holes made in banners and hoardings?

    Write your answer in the box below.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            We just learnt that air exerts pressure.

            Air would also exert pressure on the banner. And if the wind gets strong, it can cause the banner to fly.

            The holes in the banner will allow the wind to move through the banner and thus reduce the air pressure.
            `,
              },
            ],
          },
        },
      },
      {
        id: "wind-speed-air-pressure",
        kind: "video",
        time: 1,
        title: "Fast Moving Air creates Low Pressure",
        instructions: dedent`
      This statement can be hard to understand, but the video below will help.

      When we blow air on top of a piece of paper, the paper rises. Why?

      When we blow air on top of a piece of paper, the air on top is moving faster than the air below the paper.

      Fast moving air creates low pressure. So there is low pressure on top of paper, and high at the bottom. This difference in pressure is what lifts the paper.
    `,
        videoId: "MYXiL2wGDAw",
      },
      {
        id: "wind-speed-air-pressure-another-example",
        time: 2,
        kind: "image",
        title: "Fast Moving Air creates Low Pressure (again)",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Airplanes fly because _fast moving air creates low pressure._

    The wings of airplanes are designed such that the air on top of the wing travels faster than the air below the wing.

    This creates low pressure on top and high pressure below the wing. And this difference in pressure lifts the airplane.`,

        imagePath: "/learning-items/grade7/fast-moving-air-creates-low-pressure.jpeg",
      },
      {
        id: "air-expands-heating",
        kind: "video",
        time: 2,
        title: "Air Expands on Heating",
        instructions: dedent`
      The bottle in the video is not empty. It has air inside it.

      When we put the bottle in hot water, the air inside the bottle expands, thus inflating the balloon.

      When we put the bottle in ice cold water, the air inside the balloon contracts, thus deflating the balloon.

      Air expands on heating and contracts on cooling.
    `,
        videoId: "ZPErStqSSMk",
        startTime: 15,
      },
      {
        id: "warm-air-rises",
        time: 1,
        kind: "image",
        title: "Warm Air Rises",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We can see warm air rising in hot air balloons, candle lanterns and steam from a pressure cooker.`,

        imagePath: "/learning-items/grade7/warm-air-rises.jpeg",
      },
      {
        id: "making-hot-air-balloon",
        kind: "video",
        time: 8,
        title: "Making a Hot Air Balloon",
        instructions: dedent`
      Follow the instructions in this video to make a hot air balloon with things that you can find at home.
    `,
        videoId: "HTimRtAmSMs",
      },
      {
        id: "warm-air-quiz",
        kind: "textResponse",
        time: 3,
        short: true,
        title: "Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      You want to buy a house. Would you like to buy a house that has windows but no ventilators?

      Write your response in the box below.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            Warm air rises.

            A ventilator is at the top of the house where air can come in and go out. So if there is no ventilator in the house, hot air will have no way to leave the house.

            I do not want to live in a very hot house.
            `,
              },
            ],
          },
        },
      },
      {
        id: "monsoon-winds",
        time: 1,
        kind: "image",
        title: "Monsoon Winds",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Winds are generated due to uneven heating of land and water.

    In summers, land warms up faster than the ocean. The air above land heats up, expands and rises. And the air from the ocean moves towards the land. These winds carry water vapour with them and cause monsoons.

    The opposite happens in winters, where the winds move from the land to the ocean.
    `,

        imagePath: "/learning-items/grade7/monsoon-winds-summer.jpeg",
      },
      {
        id: "monsoon-winds-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Monsoon Winds Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Fill in the blank:

    In winters, the wind blows from ______ to _________.`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "ocean to land",
          },
          {
            id: "opt2",
            text: "land to ocean",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "That is incorrect. The wind blows from ocean to land in summers.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. In winters, the winds blow from the land to the ocean. This is called land breeze.",
          },
        ],
      },
      {
        id: "eye-of-the-storm",
        time: 1,
        kind: "image",
        title: "Back to Cyclones",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We started this chapter by talking about Cyclones. Let us talk about them some more.

    Specifically, the eye of the storm.

    The eye of the storm is the center of the cyclone and is a calm area. Surrounding it are winds moving at really high speeds. `,

        imagePath: "/learning-items/grade7/eye-of-the-storm-cyclone.jpeg",
      },
      {
        id: "satellites-that-monitor-cyclones",
        time: 1,
        kind: "image",
        title: "Satellites That Monitor Cyclones",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Cyclones can be devastating. Luckily, we have satellites in space that can help us detect the cyclones ahead of time, so we can warn the people who will be affected by them.

    Here is a satellite launched by India on September 8, 2016. Its name is INSAT 3DR.

    You can also see an image produced by this satellite, through which can see if cyclones are starting in the ocean.`,

        imagePath: "/learning-items/grade7/satellites-that-monitor-cyclones.jpeg",
      },
      {
        id: "anemometer",
        time: 1,
        kind: "image",
        title: "Anemometer",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Anemometer is a device that is used to measure wind speeds. They can be useful when flying kites, or when flying airplanes, or when reporting on a cyclone.

    They get their name from _Anemoi_, the wind gods in Greek mythology.`,

        imagePath: "/learning-items/grade7/anemometer.jpeg",
      },
      {
        id: "tornado",
        time: 1,
        kind: "image",
        title: "Tornadoes",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A tornado is a dark, funnel shaped cloud that reaches the ground.

    They suck everything in their path near the base and throw them out near the top, thus causing a lot of damage.

    Tornadoes generally form over land; while Cyclones form over the ocean.`,

        imagePath: "/learning-items/grade7/tornadoes.jpeg",
      },
      {
        id: "more-tornado",
        time: 3,
        kind: "image",
        title: "Video on Tornado",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![tornadoes](/learning-items/grade7/tornado.jpeg)

    3 out of 4 Tornadoes occur in the USA. [Here is a video](http://video.nationalgeographic.com/video/101-videos/tornadoes-101) that shows how tornadoes occur.

    The video says that the tornado can spin up to 300 miles per hour. That is about 482 kilometers per hour.
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
        locked: true,
      },
    ],
  },
  {
    id: " 15",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter15-thumbnail.jpg",
    title: "Light",
    description:
      "Learn Chapter 15, Light, in the Class 7 NCERT science book by watching videos. Try answering questions on concave and convex lenses and mirrors.",
    items: [
      {
        id: "light-straight-line-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill in the Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![light bulb straight line](/learning-items/grade7/light-travels-in-straight-line2.jpg)

     Light travels in ________ lines.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "zig-zag",
          },
          {
            id: "opt2",
            text: "curved",
          },
          {
            id: "opt3",
            text: "straight",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
          This is incorrect. Light travels in straight lines. Look at this image _from page 174_ of your science book to see how.

          ![light travels in straight lines](/learning-items/grade7/light-travels-in-straight-line.jpeg)`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
          No this is not correct. Light travels in straight lines. Look at this image _from page 174_ of your science book to see how.

          ![light travels in straight lines](/learning-items/grade7/light-travels-in-straight-line.jpeg)`,
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. Light travels in straight lines. Look at _figure 15.2 on page 174_ of your science book to learn more.",
          },
        ],
      },
      {
        id: "reflection-light-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Quiz on Mirrors",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![polished surface mirror light change direction](/learning-items/grade7/polished-surface-mirror-light-change-direction.jpeg)

     Any polished or shiny surface can act like a mirror.

     Mirror changes the direction of light that falls on it. This change in direction of light by a mirror is called ________ of light.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "dissection",
          },
          {
            id: "opt2",
            text: "reflection",
          },
          {
            id: "opt3",
            text: "rejection",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. The word dissection is generally used when doctors dissect a body in an operation room.",
          },
          {
            answerSet: ["opt2"],
            response: dedent`
          __Correct__. The change in the direction of light caused by a mirror is called reflection. By the way, the surface of water can also act like a mirror.
          ![water reflects light acts like mirror](/learning-items/grade7/surface-of-water-acts-like-mirror.jpeg)
          `,
          },
          {
            answerSet: ["opt3"],
            response: "This is incorrect. Rejection has nothing to do with light.",
          },
        ],
      },
      {
        id: "image-object-plane-mirror",
        time: 1,
        kind: "image",
        title: "Image and Object",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    If a cat is in front of a mirror, then it appears that a similar cat is also behind the mirror.

    The cat which appears behind the mirror is called an __image__.

    The cat itself is called the __object__. `,
        imagePath: "/learning-items/grade7/image-object-plane-mirror.jpg",
      },
      {
        id: "plane-mirror-image",
        kind: "video",
        time: 3,
        title: "Image Formed By Plane Mirrors",
        instructions: dedent`
      Images formed by plane mirrors (or flat mirrors) are __erect__. Erect means upright. When you stand in front of a mirror, your image shows your head placed above your body, and not under it. This means that your image in the mirror is erect (and not inverted).

      Images formed by plane mirrors (or flat mirrors) are __the same size as the object__. The image is not bigger or smaller than the object.

      Images formed by plane mirrors (or flat mirrors) are __the same distance behind the mirror as the object is in front of them__. You will see an experiment in the video that will demonstrate this fact.

      Images formed by plane mirrors (or flat mirrors) are __virtual__. That means that even if we tried, we could not get the image from the mirror on to a screen placed either in front or behind the mirror.
    `,
        videoId: "qWT92yaGy2k",
        endTime: 217,
      },
      {
        id: "plane-mirror-image-type",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Plane Mirror Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![plane mirror image erect](/learning-items/grade7/mirror-image-erect.jpeg)

     A plane mirror produces which of the following images.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "inverted and magnified image",
          },
          {
            id: "opt2",
            text: "erect and virtual image",
          },
          {
            id: "opt3",
            text: "image is same size as the object",
          },
          {
            id: "opt4",
            text: "erect and smaller than the object",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Incorrect__. A plane mirror does not produce an inverted image. It produces an upright or erect image. Also, the image is the same size as the object and not bigger or smaller than the object.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. The image produced by a plane mirror is erect. That means it is upright and not inverted. The image is also virtual. That means that the image cannot be produced on a screen.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. The image produced by a plane mirror is the same size as that of the object.",
          },
          {
            answerSet: ["opt4"],
            response:
              "__Incorrect__. The image produced by a plane mirror is erect. But it is not smaller than the object. It is in fact the same size as that of the object.",
          },
        ],
      },
      {
        id: "plane-mirror-front-back-inversion",
        kind: "video",
        time: 3,
        title: "Right is Left and Left is Right",
        instructions: dedent`
      In an image formed by a mirror, the left side of the object is seen on the right side in the image, and right side of the object appears to be on the left side in the image.

      You can see this phenomenon used in Ambulances. Watch this video to learn more.
    `,
        videoId: "qWT92yaGy2k",
        startTime: 217,
      },
      {
        id: "plane-mirror-front-back-inversion-explanation",
        kind: "video",
        time: 3,
        title: "Optional Video: How Mirrors Work",
        instructions: dedent`
      This video is optional.

      Why is it that when we raise our left hand, the image in the mirror raises its right hand?

      This video explains.

      A mirror flips the image from front to back. Watch this video to find out how.
    `,
        videoId: "sqAjsCtpkAA",
        endTime: 126,
      },
      {
        id: "concave-convex-surfaces",
        time: 1,
        kind: "image",
        title: "Concave and Convex Surfaces",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The __inner__ side of a spoon is a concave surface.

    The __outer__ side of a spoon is a convex surface.`,
        imagePath: "/learning-items/grade7/concave-convex-surface-spoon3.jpeg",
      },
      {
        id: "concave-mirror-a-way-to-remember",
        time: 1,
        kind: "image",
        title: "Concave: A Way To Remember",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A __concave__ mirror is a spherical mirror which curves inward.

    A way to remember this is to think of a __cave__, whose mouth also curves inward.

    Alternatively, a convex mirror is a spherical mirror which curves outward.`,
        imagePath: "/learning-items/grade7/concave-mirror-inward-buldge.jpg",
      },
      {
        id: "concave-convex-mirrors-video",
        kind: "video",
        time: 2,
        title: "Concave and Convex Mirrors: A Video",
        instructions: dedent`
      This video is great. Here the teacher talks about the types of images made by concave and convex mirrors.

      __Concave Mirrors__

      _When standing really close to a concave mirror_, the image is erect, larger than the object and virtual. A virtual image is one that cannot be obtained on a screen.

      _When standing farther away from the concave mirror_, the image is inverted; that means the image is upside down. The image is also real; that means the image can be obtained on the screen.

      __Convex Mirrors__

      Convex mirrors make images that are erect and virtual.  The image is also smaller than the object.
    `,
        videoId: "jtTBOMVMSYM",
        endTime: 65,
      },
      {
        id: "concave-convex-mirrors",
        time: 1,
        kind: "image",
        title: "Uses of Concave and Convex Mirrors",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A concave mirror curves inward. It is used by dentists. It is also used by people who want to shave their faces or do make up.

    A convex mirror curves outward. It is used in parking spaces to see things around corners and forms images of objects spread over a large area.`,
        imagePath: "/learning-items/grade7/concave-mirror-convex-mirror.jpeg",
      },
      {
        id: "concave-mirror-images",
        time: 3,
        kind: "image",
        title: "Images Formed By Concave Mirrors",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here is a [great simulation](http://cdac.olabs.edu.in/?sub=74&brch=9&sim=38&cnt=59) for the images produced by a concave mirror. You can move the candle in the simulation to see how the concave mirror behaves.

    __When Standing Really Close To A Concave Mirror__

    In this scenario, the image produced is erect, larger than the object, and also virtual. A virtual image simply means that it cannot be obtained on a screen.
    ![concave mirror standing close image erect virtual magnified](/learning-items/grade7/concave-mirror-erect-virtual-image.jpeg)

    Here is a diagram that shows the image produced by a concave mirror when the object is really close to it. Notice how the candle (the object) is really close to the mirror, and the image of the candle is erect, magnified and virtual.
    ![concave mirror standing close image erect virtual magnified](/learning-items/grade7/concave-mirror-erect-virtual-image-ray-diagram.jpeg)

    __When Standing Far Away From A Concave Mirror__

    In this scenario, the image produced is inverted; that means it is upside down. The image is also real; that means the image can be obtained on a screen.
    ![concave mirror standing far image inverted real](/learning-items/grade7/concave-mirror-image-real-inverted.jpeg)

    Here is a diagram that shows the image produced by a concave mirror when the object is far away from it. Notice how the candle (the object) is far away from the mirror, and the image of the candle is inverted, bigger than the object and real.

    You can play with this [great simulation](http://cdac.olabs.edu.in/?sub=74&brch=9&sim=38&cnt=59) to see the type of images produced by the concave mirror.
     `,
        imagePath: "/learning-items/grade7/concave-mirror-image-real-inverted-ray-diagram.jpeg",
      },
      {
        id: "real-virtual-image-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Real or Virtual",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     An image which can be obtained on the screen is called a _________. `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "real image",
          },
          {
            id: "opt2",
            text: "virtual image",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. An image that can be obtained on a screen in the real world is called a real image.",
          },
          {
            answerSet: ["opt2"],
            response:
              "No, this is not correct. An image which __cannot__ be obtained on a screen is called a virtual image.",
          },
        ],
      },
      {
        id: "concave-mirror-images-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![concave mirror](/learning-items/grade7/concave-mirror.jpeg)

     A concave mirror always forms a real image. True or False?
     `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
          This is incorrect. It is true that the concave mirror forms an inverted, real image. But when the object is really close to the concave mirror, the image is erect, magnified and __virtual__.

          [Watch this video](https://www.youtube.com/watch?v=jtTBOMVMSYM) to review the concept.
          `,
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Concave mirrors form both real and virtual images. The type of image depends on the distance of the object from the mirror.",
          },
        ],
      },
      {
        id: "concave-mirror-uses",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Uses of Concave Mirrors",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     A concave mirror is used ________.
     `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "in parking spaces",
          },
          {
            id: "opt2",
            text: "by dentists",
          },
          {
            id: "opt3",
            text: "when doing make up",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`This is incorrect. A __convex__ mirror is used in parking spaces to see around corners.`,
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Concave mirrors are used by dentists to see a magnified form of teeth.",
          },
          {
            answerSet: ["opt3"],
            response: dedent`
          __Correct__. Concave mirrors are used by people when doing make up so they can see a magnified version of their face. When the object is placed very close to a concave mirror, the image is magnified.

        ![concave mirror makeup mirror](/learning-items/grade7/make-up-mirror.jpeg)
          `,
          },
        ],
      },
      {
        id: "convex-mirror-images",
        time: 3,
        kind: "image",
        title: "Images Formed By Convex Mirrors",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here is a [great simulation](https://www.edumedia-sciences.com/en/media/367-convex-mirror) for the images produced by a convex mirror. You can move the candle in the simulation to see how the convex mirror behaves.

    A convex mirror always produces an image that is erect, virtual and smaller than the object.
    ![convex mirror image smaller virtual erect](/learning-items/grade7/convex-mirror-image-smaller-virtual-erect.jpeg)

    Here is a diagram that shows the image produced by a convex mirror. Notice how the image of the candle is erect, virtual and smaller than the object.
     `,
        imagePath:
          "/learning-items/grade7/convex-mirror-image-smaller-virtual-erect-ray-diagram.jpeg",
      },
      {
        id: "convex-mirror-images-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     We can obtain an enlarged and erect image using a convex mirror. True or False?
     `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. The image produced by a convex mirror is not enlarged. It is in fact smaller than the object.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. The image produced by a convex mirror is smaller than the object.",
          },
        ],
      },
      {
        id: "convex-mirror-uses-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Convex Mirror Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Which of the following statements about the convex mirror are true?
     `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Used as magnifying glass",
          },
          {
            id: "opt2",
            text: "Image produced is smaller than the object",
          },
          {
            id: "opt3",
            text: "Image produced is same size as the object",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is __not true__. A magnifying glass is transparent and is not a mirror.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is __true__. The image produced by a convex mirror is smaller than the object.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is __not true__. The image produced by a convex mirror is not the same size as the object. It is in fact smaller than the object.",
          },
        ],
      },
      {
        id: "concave-convex-lenses",
        time: 1,
        kind: "image",
        title: "Convex and Concave Lenses",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A __convex__ lens feels __thicker__ in the middle than at the edges. An example of a convex lens is a magnifying glass.

    A __concave__ lens feels __thinner__ in the middle than at the edges.

    Here is one way to remember this — When you think of a concave lens, think of a cave. A cave has a mouth that curves inward. The shape of the concave lens is like the mouth of a cave.`,
        imagePath: "/learning-items/grade7/concave-convex-lens.jpeg",
      },
      {
        id: "convex-concave-converging-diverging",
        time: 1,
        kind: "image",
        title: "Converging and Diverging Lenses",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A __convex__ lens converges the light falling on it (or bends light inward). Therefore, it is called a __converging lens__. This lens is shown on the top of the gif.

    A __concave__ lens diverges the light falling on it (or bends light outward). Therefore, it is called a __diverging lens__. This lens is shown on the bottom of the gif.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/convex-concave-converging-diverging-lens.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "convex-lens-video",
        kind: "video",
        time: 1,
        title: "Convex Lens",
        instructions: dedent`
      A convex lens creates an image that is real and inverted. As you will see in this video, the image of the candle is obtained on the screen; thus it is real. And the image is upside down or inverted.

      Although, when an object is placed very close to the convex lens, the lens acts like a magnifying glass and forms an image that is virtual, erect and magnified.
    `,
        videoId: "MvUIsetjVck",
        startTime: 113,
        endTime: 148,
      },
      {
        id: "convex-lens-simulation",
        time: 1,
        kind: "image",
        title: "Convex Lens Simulation",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here is a [great simulation](http://www.physics-chemistry-interactive-flash-animation.com/optics_interactive/converging_lens_convex_positive.htm) of the convex lens.

    You will see that the candle creates a real and inverted image on the screen. You can move the candle around to see how the convex lens works.`,
        imagePath: "/learning-items/grade7/convex-lens-image-real-inverted.jpeg",
      },
      {
        id: "convex-lens-magnifying-glass",
        time: 1,
        kind: "image",
        title: "Magnifying Glass",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A magnifying glass is a convex lens.

    When an object is placed very close to a magnifying glass, the image formed is virtual, erect and magnified.`,
        imagePath: "/learning-items/grade7/convex-lens-magnifying-glass.jpeg",
      },
      {
        id: "convex-lens-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Convex Lens Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Which of the following statements about the convex lens are true?
     `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Used by dentists",
          },
          {
            id: "opt2",
            text: "Creates a real and inverted image",
          },
          {
            id: "opt3",
            text: "Used as a magnifying glass",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is __not true__. Dentists use a mirror and not a lens. And that mirror happens to be a concave mirror.",
          },
          {
            answerSet: ["opt2"],
            response: "This is __true__. The image produced by a convex lens is real and inverted.",
          },
          {
            answerSet: ["opt3"],
            response: "This is __also true__. The convex lens is used as a magnifying glass.",
          },
        ],
      },
      {
        id: "convex-lens-quiz-2",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     The image formed by a convex ________ is always virtual and smaller in size.
     `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "lens",
          },
          {
            id: "opt2",
            text: "mirror",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
          __Incorrect__. The image formed by a convex lens can be obtained on a screen. Thus that image is real and not virtual.

          ![convex lens image real inverted](/learning-items/grade7/convex-lens-image-real-inverted.jpeg)
          `,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        __Correct.__ The image formed by the convex mirror is always virtual, erect and smaller than the object.

        ![convex mirror image virtual erect smaller than object](/learning-items/grade7/convex-mirror-image-smaller-virtual-erect.jpeg)
        `,
          },
        ],
      },
      {
        id: "concave-lens-simulation",
        time: 1,
        kind: "image",
        title: "Concave Lens Simulation",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    This is a [great simulation](https://www.edumedia-sciences.com/en/media/703-diverging-lens) of how the concave lens works.

    Here, you will see that the man (the object) creates an erect, virtual and smaller image.`,
        imagePath: "/learning-items/grade7/concave-lens.jpeg",
      },
      {
        id: "prism-sunlight-seven-colours",
        time: 1,
        kind: "image",
        title: "Coloured Sunlight",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Sunlight consists of 7 colours. These are: Violet, Indigo, Blue, Green, Yellow, Orange, Red. We can remember them with the acronym VIBGYOR.

    These colours together create white light.

    When white light passes through a prism, we can see all of the 7 component colours.`,
        imagePath: "/learning-items/grade7/colour-spectrum-white-light.jpg",
      },
      {
        id: "how-do-we-see-objects",
        time: 1,
        kind: "image",
        title: "How Do We See Objects?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    On page 176 of the science book, Paheli asks _what makes things visible to us?_ Here is one answer:

    We know that white light comprises of 7 colours.

    A leaf looks green because when white light falls on it, it absorbs all colours, but reflects green. Thus our eye perceives the leaf as green.`,
        imagePath: "/learning-items/grade7/how-do-we-see-objects.jpg",
      },
    ],
  },
  {
    id: " 16",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter16-water-thumbnail.jpg",
    title: "Water: A Precious Resource",
    description:
      "Learn Chapter 16, Water: A Precious Resource, in the Class 7 NCERT science book by watching videos, answering questions, and viewing solutions.",
    items: [
      {
        id: "water-resources-on-earth",
        time: 1,
        kind: "image",
        title: "How Much Water Is On Earth?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     __Oceans__: The big blue section in the chart below represents the oceans on earth. Most of the water on earth, about 97%, is in the oceans. Ocean water is salty and thus not fit for drinking.

     __Glaciers__: The green section in the chart represents water in glaciers. About 1.7% of the total water on earth is in the form of snow and ice in glaciers. Since this water is frozen, it is not available for drinking or human use.

     __Groundwater__: The yellow section in the chart shows groundwater. This water that is found below the ground and is taken out using hand pumps and wells. We can use this water for drinking, cooking and washing. Only about 1.7% of all the water on earth is below the ground.

     __Rivers__: Rivers and lakes make a very small portion of the total water on earth. It is shown in orange colour in the chart and it is so tiny that we can barely see it in the chart.

     _Source: Wikipedia, Water Distribution On Earth_`,
        imagePath:
          "/learning-items/grade7/water-resources-oceans-glaciers-groundwater-rivers-percentage.jpeg",
      },
      {
        id: "freshwater-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True Or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     The freshwater stored in the ground is much more than the water present in the rivers and lakes of the world.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        __Correct__. Freshwater below ground is much more than the water in all rivers and lakes of the world.

        In the beginning of this chapter we saw a chart. It showed freshwater below the ground (or groundwater) in yellow colour, and rivers and lakes in orange colour.

        Freshwater below the ground is about 1.7% of all water on earth and that is a lot more than the water in all the rivers and lakes of the world.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        This is not correct. The amount of water in all the rivers and lakes of the world is much smaller than the water available below ground.

        In the beginning of this chapter we saw a chart. It showed freshwater below the ground (or groundwater) in yellow colour, and rivers and lakes in orange colour.

        The yellow section in the chart is a lot bigger than the orange section. Thus, the amount of groundwater on earth is a lot more than the water in all rivers and lakes of the world.`,
          },
        ],
      },
      {
        id: "water-resources-video",
        kind: "video",
        time: 2,
        title: "Salt water and Freshwater",
        instructions: dedent`
    __Salt water__: Oceans make about 97% of all water on earth. Ocean water contains salt and thus is also called salt water. We cannot use salt water for drinking and washing purposes as it contains salt in it.

    In some places ocean water is purified by removing salt from it; humans can then use this purified water. But this process takes a lot of energy and is expensive.

    __Freshwater__: The remaining 3% of all water on earth is freshwater. It includes water frozen as snow in glaciers, water below the ground, and water in rivers. This water does not have salt in it, and thus we humans can use this water.

    Also, even though water frozen as snow in glaciers does not have salt, it is not available for humans to use because it is frozen. So we can only use the freshwater below the ground and water in rivers and lakes.
    `,
        videoId: "_mM9W71_nVA",
        startTime: 9,
        endTime: 149,
      },
      {
        id: "river-water-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True Or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Water from rivers is the only source for irrigation in the fields.
    `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        This is not correct. Rivers are an important source of irrigation in farms.

        But farmers can also take out water from below the ground using wells and hand pumps. This groundwater can then be used to irrigate fields.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        __Correct__. Water from rivers is __not__ the only source for irrigation in fields.

        Farmers can take out water from below the ground using wells and hand pumps. This groundwater can also be used to irrigate fields.`,
          },
        ],
      },
      {
        id: "what-happens-when-people-donot-get-water",
        time: 1,
        kind: "image",
        title: "What If We Do Not Get Water?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Water on our planet is limited. And water shortages can cause violent fights.

    In large parts of India, people (mostly women) spend a lot of time collecting drinking water for their families.

    Watch these two videos — [Video 1](http://video.nytimes.com/video/2006/09/28/world/1194817098866/part-1-water-woes-in-india.html) and [Video 2](http://video.nytimes.com/video/2006/09/28/world/1194817115048/part-2-water-woes-in-india.html) — from the New York Times to see the current state of fresh water in Indian cities.

    Even though these videos were made in 2006, the situation has only gotten worse in the last decade.
    `,
        imagePath: "/learning-items/water-shortage.jpeg",
      },
      {
        id: "water-shortage-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "True Or False",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Water shortage is a problem faced only by people living in rural areas.
    `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "True",
          },
          {
            id: "opt2",
            text: "False",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        This is not correct.

        It is true that people living in villages (or rural areas) face water shortage.

        But shortage of water is a major problem experienced by people who live in cities also.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        __Correct__. Water shortage is a problem faced  by people living in rural areas __and__ in cities.`,
          },
        ],
      },
      {
        id: "water-cycle",
        kind: "video",
        time: 4,
        title: "Water Cycle",
        instructions: dedent`
    The circulation of water between oceans and land is known as Water Cycle.

    It involves processes like evaporation, transpiration and condensation. Let us learn about them in this video.`,
        videoId: "jFjI6y46QRk",
        endTime: 255,
      },
      {
        id: "water-cycle-quiz",
        kind: "textResponse",
        time: 3,
        short: true,
        title: "Water Cycle Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The image below show processes involved in the water cycle. They are labelled by numbers.

    The image also shows the names of the processes but in their jumbled up form.

    Your task is to rearrage the words. You should then write them in the box below.

    _Note:_ Number 6 is going to be hard. But do not worry. We will learn about it soon.

    ![water cycle quiz jumbled up words](/learning-items/grade7/class-7-grade-16-figure-16-5-quiz.jpeg)
`,
        hacks: {
          afterBody: {
            preface: "Here is a response from a student who took this quiz.",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            1 - Groundwater

            2 - Evaporation

            3 - Condensation

            4 - Clouds

            5 - Transpiration

            6 - Infiltration

            7 - Precipitation`,
              },
            ],
          },
        },
      },
      {
        id: "ground-water-digging-a-well",
        kind: "video",
        time: 2,
        title: "Groundwater",
        instructions: dedent`
    Water that collects below ground in soil or in spaces between rocks is called groundwater.

    In some places, if we dig a hole in the ground, we will find water. This water can be taken out by digging wells and installing pumps.

    Here is a video of a few people digging a well by hand to take out groundwater.
`,
        videoId: "RuzDyFquyqw",
        startTime: 37,
        endTime: 132,
      },
      {
        id: "how-does-water-collect-below-ground",
        kind: "video",
        time: 1,
        title: "How Does Water Reach Below Ground?",
        instructions: dedent`
    Water on the surface of the earth (example rain water or water in rivers) sometimes seeps through the soil and fills the empty spaces between the cracks of rocks.

    This is how water is stored below ground.

    This process of seeping of water into ground is called __Infiltration__.

    The upper limit of the water below ground is called __Water Table__.

    Watch this video to learn more about water table and infiltration. The teacher in this video talks about the _hydrologic cycle_, which is just a fancy name for _water cycle_.
`,
        videoId: "IDAj5T1ST7o",
        startTime: 114,
        endTime: 168,
      },
      {
        id: "infiltration-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     The process of water seepage into the ground is called ________.
    `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Groundwater",
          },
          {
            id: "opt2",
            text: "Precipitation",
          },
          {
            id: "opt3",
            text: "Condensation",
          },
          {
            id: "opt4",
            text: "Infiltration",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        This is not correct.

        The water available below the surface of the ground is called groundwater. In this question, we are asking about the __process__ by which water moves into the ground.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        This is incorrect.

        Precipitation is rain. In this question, we are asking about the __process__ by which water moves into the ground.`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`
        This is wrong.

        Condensation is when water vapour turns back into liquid droplets. This process happens in clouds. In this question, we are asking about the __process__ by which water moves into the ground.`,
          },
          {
            answerSet: ["opt4"],
            response: dedent`
        __Correct__. The process of water seepage into the ground is called infiltration.

        The word __infiltration__ generally means _entering or moving in_. This word is generally used when an army __infiltrates__ into enemy location.

        In this case, however, infiltrate refers to the process of water moveing into or entering the ground.

        ![army infiltrates](/learning-items/grade7/army-infiltrate-2.jpg)`,
          },
        ],
      },
      {
        id: "aquifer",
        kind: "video",
        time: 4,
        title: "What Is An Aquifer?",
        instructions: dedent`
    Places below the ground where water is stored between rocks is called an aquifer. The image below shows both the aquifer and the water table.
    ![aquifer water table](/learning-items/grade7/aquifer-water-table.jpeg)

    Aquifer is made up of two words — _aqua_ and _fer_.

    _Aqua_ means water.

    And _fer_ means _to carry or bring_.  Like the word _Ferry_, which is a boat that carries or brings passengers.

    Thus aquifer means a place that carries or brings water.

    Here is a map of the major aquifers all around the word. The places in dark blue show where aquifers are located. The major aquifer in India is located where the Ganga flows.
    ![aquifers around the world India ganga plain](/learning-items/grade7/aquifer-around-the-world.jpeg)

    Finally, here is a short video that gives more information on how water is collected below the ground in aquifers.
`,
        videoId: "oNWAerr_xEE",
        endTime: 115,
      },
      {
        id: "aquifer-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     The water bearing layer of the earth is called ________.
    `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Water Table",
          },
          {
            id: "opt2",
            text: "Infiltration",
          },
          {
            id: "opt3",
            text: "Aquifer",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        This is not correct.

        The upper limit of the water below ground is called Water Table. This question is about the region below the ground that holds water.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        This is incorrect.

        Infiltration is the process by which water moves or seeps into the ground. Here we are asking about the region below the ground that holds water.`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`
        __Correct__.

        The water bearing layer of the earth is called an aquifer. In other words, places below the ground where water is stored between rocks is called an aquifer.`,
          },
        ],
      },
      {
        id: "tweet-what-youve-learned",
        kind: "textResponse",
        time: 5,
        short: true,
        title: "Tweet what you've learned",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Explain how groundwater is recharged.

    Write your answer in 140 characters, and then submit it in the box below. Finally, you can tweet your answer with the hashtag #chapter16.

    _Hint_: When we say _groundwater recharge_, we mean recharging or filling up the ground with new water.
    `,
        hacks: {
          afterBody: {
            preface: "Here are some tweets from selected students:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response:
                  "Surface water infiltrates the ground. There it becomes new groundwater #chapter16",
              },
              {
                studentName: "Koushiki",
                imagePath: "/fake-responses/koushiki.png",
                response:
                  "Rain falls on earth and that water seeps into ground. This recharges the groundwater. #chapter16",
              },
            ],
          },
        },
      },
      {
        id: "depletion-of-water-table",
        kind: "video",
        time: 4,
        title: "Depletion Of Water Table",
        instructions: dedent`
    The word _depletion_ means reduction in the quantity of something. Like in this gif, apples are getting depleted.

    ![apple depletion](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/depletion-of-apples.gif)

    Water table depletion happens when the level of groundwater goes down. If that happens we will need to dig deeper wells and use more energy to pump water from the ground.

    There are several reasons for water table depletion. Three of them are:
     - Increasing Population
     - Increasing Industries
     - Agricultural Activities

     You can learn about all of these in the video below.
`,
        videoId: "mOkU0Ei2-Pk",
        startTime: 10,
        endTime: 231,
      },
      {
        id: "water-table-depletion-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Select The Correct Option",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Which one of the following is __not__ responsible for water shortage?
    `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Rapid growth of industries",
          },
          {
            id: "opt2",
            text: "Increasing population",
          },
          {
            id: "opt3",
            text: "Heavy rainfall",
          },
          {
            id: "opt4",
            text: "Mismanagement of water",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        This is not correct.

        Industries use water to produce things. An increase in the number of industries will mean more water will be used. If more water is used by industries, then that can cause a shortage of water that we need in our homes.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        This is incorrect.

        People drink water and use it for cooking and washing purposes. The amount of water available on earth is limited. As the population increases, more people will need water. And that can cause a shortage of water.`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`
        __Correct__.

        Heavy rainfall will recharge the groundwater, and will make sure there is enough water in rivers and ponds. An increase in the availability of water will __not__ be responsible for water shortage.`,
          },
          {
            answerSet: ["opt4"],
            response: dedent`
        This is not correct.

        If our water pipes leak, or if we use a lot of water to wash our cars, or if we mismanage water in any other way then that can lead to a shortage of water.`,
          },
        ],
      },
      {
        id: "water-table-depletion-quiz-short-answer",
        kind: "textResponse",
        time: 5,
        short: true,
        title: "Water Table Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    There are ten tube wells in a lane of fifty houses. What could be the long term impact on the water table?
    `,
        hacks: {
          afterBody: {
            preface: "Here is an answer from one student who responded to this quiz.",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            If a lot of people use tube wells to take out groundwater, then the level of water table is likely to go down.

            This problem will get worse in times of drought or when it does not rain.`,
              },
            ],
          },
        },
      },
      {
        id: "rainwater-harvesting",
        kind: "video",
        time: 9,
        title: "Rainwater Harvesting",
        instructions: dedent`
    Rainwater Harvesting is a way to collect water when it rains so it can be used later.

    In this video, Aamir Khan talks to several amazing people who have set up rainwater harvesting systems to conserve water in cities and villages.`,
        videoId: "DhgaCEP6jn4",
      },
      {
        id: "final-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Final Quiz",
        locked: true,
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![water drop exploding](/learning-items/grade7/water-drop-exploding.jpg)

    Choose the correct option. The total water:
    `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "in lakes and rivers is constant",
          },
          {
            id: "opt2",
            text: "under ground is constant",
          },
          {
            id: "opt3",
            text: "in seas and oceans is constant",
          },
          {
            id: "opt4",
            text: "of the world is constant",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`
        This is not correct.

        Lakes and rivers can lose water due to evaporation. Lakes and rivers can gain water because of rainfall. Thus the total water in the lakes and rivers of the world is __not__ constant.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`
        This is incorrect.

        People can take out a lot of water from the ground using wells and pumps. When this happens, the water table depletes. Thus the total water under ground is __not__ constant.`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`
        This is not correct.

        Oceans and seas can lose water due to evaporation. Also, glaciers are melting due to global warming, which causes an increase in the amount of water in our oceans and seas. This is what leads to a rise in sea level and causes flooding in coastal areas.

        Thus the total water in oceans and seas is __not__ constant.`,
          },
          {
            answerSet: ["opt4"],
            response: dedent`
        __Correct__.

        The total water of the world is constant. This can be difficult to understand but is true.

        The water on earth changes from solid (ice in glaciers) to liquid (rivers) to gas (water vapour). But the total amount of water on earth remains constant.

        The glaciers of our world might melt, but that adds more water to the oceans of our world. Thus, the total amount of water on earth remains constant.`,
          },
        ],
      },
    ],
  },
  {
    id: " 18",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter18-thumbnail-2.jpg",
    title: "Wastewater Story",
    description:
      "Learn Chapter 18, Wastewater Story, from the NCERT science book in Class 7 by answering questions and checking solutions.",
    items: [
      {
        id: "what-is-wastewater-sewage",
        time: 1,
        kind: "image",
        title: "What Is Wastewater And Sewage?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![water going down drain wastewater](/learning-items/grade7/water-down-sink-wastewater.jpeg)
    Water that goes down the drain from sinks, showers, toilets, and laundries is __wastewater__. This water is dirty and not fit for drinking.

    ![indian toilet sewage poop](/learning-items/grade7/indian-toilet-2.jpeg)
    Another name for this wastewater is __sewage__. Sewage contains wastewater released by homes, hospitals, industries and offices. It also contains human waste like poop and urine.

    Sewage often makes it into newspapers. Below is one headline about sewage. Also, the impurities in sewage are called pollutants or contaminants.
`,
        imagePath: "/learning-items/grade7/sewage-newspaper.jpeg",
      },
      {
        id: "wastewater-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Wastewater released by houses is called _________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "sewer",
          },
          {
            id: "opt2",
            text: "sewage",
          },
          {
            id: "opt3",
            text: "drinking water",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. A sewer is a network of pipes that carries wastewater from our homes to a place where this water can be cleaned. We will learn about sewers soon.",
          },
          {
            answerSet: ["opt2"],
            response:
              '__Correct__. Sewage is pronounced _"su-ij"._ The wastewater released from the kitchen and toilet in our homes is called sewage.',
          },
          {
            answerSet: ["opt3"],
            response:
              "This is not correct. The wastewater released from our homes is not fit for drinking. Among other things, this wastewater contains urine and poop.",
          },
        ],
      },
      {
        id: "contaminants-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank (Again)",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Cleaning of wastewater is a process of removing _________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "oxygen from water",
          },
          {
            id: "opt2",
            text: "contaminants",
          },
          {
            id: "opt3",
            text: "pollutants",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`This is incorrect.

        Later in this chapter we will learn how wastewater is cleaned, before it can be released into a river. There you will see that we do not remove oxygen from wastewater.

        In fact, water stops being water, if oxygen is removed from it.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`__Correct__.

        A contaminant in water is a substance that pollutes the water or makes it impure. Cleaning of wastewater is a process of removing contaminants like poop, oil and other impurities from water.`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`__Correct__.

        A pollutant in water is a substance that pollutes water or makes it unclean. Both pollutant and contaminant mean the same thing.

        Cleaning of wastewater is a process of removing pollutants like poop, oil and other impurities from water.`,
          },
        ],
      },
      {
        id: "what-is-sewer",
        time: 1,
        kind: "image",
        title: "What Is A Sewer?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![sewer pipe carries sewage water to treatment plant](/learning-items/grade7/sewer-pipes-sewage.jpeg)
    A __sewer__ is a network of underground pipes that carry sewage or wastewater from places where it is produced (like in homes and industries) to a place where this wastewater can be cleaned.

    A __manhole__ is a small opening in the sewer system which can let a person enter a sewer.
`,
        imagePath: "/learning-items/grade7/manhole-cover-sewer.jpeg",
      },
      {
        id: "what-is-excreta",
        time: 1,
        kind: "image",
        title: "What Is Excreta?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    When I think of the word __excreta__, I am reminded of the word __exit__.

    Excreta is waste that exits our body. This includes poop and urine.
`,
        imagePath: "/learning-items/grade7/excreta-human-waste-poop.jpeg",
      },
      {
        id: "wastewater-treatment-step-1",
        kind: "video",
        time: 3,
        title: "Step 1 In Wastewater Treatment: Bar Screen",
        instructions: dedent`
      Wastewater that leaves our our toilets, kitchens and industries goes through the sewer pipeline into the wastewater treatment plant. This is where the wastewater gets cleaned.

      In the first step of this process, wastewater is made to pass through a filter called bar screen. This screen is like a sieve that removes large objects like plastic bags, clothes, tree leaves from the wastewater.

     ![wastewater treatment step 1 bar screen](/learning-items/grade7/wastewater-treatment-bar-screen-step-1.jpeg)

     ---
      ___Note__: Here is a great 2-minute animation that shows how this process works._
    `,
        videoId: "FMWNMNrfzC4",
        startTime: 30,
        endTime: 170,
      },
      {
        id: "explain-bar-screen",
        kind: "textResponse",
        time: 2,
        short: true,
        title: "Tweet About Bar Screen",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    What is the first step in wastewater treatment?

    Write your answer in the box below and then tweet it with the hashtag #barscreen.`,
        hacks: {
          afterBody: {
            preface: "Here are responses from other students who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`Bar screen is a sieve. It removes large particles from wastewater. #barscreen
            `,
              },
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`Some people flush plastics into their toilets. Bar screen removes them from water. #barscreen.
            `,
              },
            ],
          },
        },
      },
      {
        id: "wastewater-treatment-step-2",
        time: 1,
        kind: "image",
        title: "Step 2 In Wastewater Treatment: Grit Removal",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Grit means small particles of sand and stone.

    To remove grit from wastewater, the water is made to move through a tank.

    The speed of wastewater is slow enough that sand, small stones, glass and grit settle down at the bottom of the tank due to the force of gravity. These grit particles can cause damage to the water treatment machine, thus they are removed at this step.

    ![wastewater treatment step 2 grit sand removal](/learning-items/grade7/wastewater-treatment-grit-sand-removal-step-2.jpeg)

    ---

    ___Note:__ Other impurities in wastewater, like poop, are not removed at this step. The wastewater flowing through the tank is moving too fast for poop to settle down due to the force of gravity. We will remove poop from wastewater in the next step_.
`,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "wastewater-treatment-step-3",
        time: 2,
        kind: "image",
        title: "Step 3 In Wastewater Treatment: Poop Removal",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    In this step, we will to remove poop from wastewater. To do this wastewater is stored in a large tank. This is what the tank looks like in real life.
    ![wastewater treatment step 3 clarifier poop oil removal](/learning-items/grade7/clarifier-wastewater-treatment-step-3-poop-oil-removal.jpeg)

    Oil floats on top of the wastewater. It is removed using a long mechanical arm. Here is what that process looks like.
    ![wastewater treatment step 3 clarifier oil removal](/learning-items/grade7/clarifier-wastewater-treatment-step-3-oil-removal.jpeg)

    Poop (or faeces) settle at the bottom of the tank. This settled poop is called __sludge__. The sludge is removed from the bottom of the tank and the remaining wastewater is called clarified water.
`,
        imagePath: "/learning-items/grade7/wastewater-treatment-poop-oil-removal-step-3.jpeg",
      },
      {
        id: "wastewater-treatment-step-4",
        kind: "video",
        time: 2,
        title: "Step 4 In Wastewater Treatment: Adding Air",
        instructions: dedent`
      By now, we have removed a lot of impurities from wastewater, but some impurities still remain. These include more human poop and food waste.

      To remove these impurities, air is pumped into clarified water. This air encourages bacteria grow in water. The bacteria consume the remaining human waste and food waste and then settle down at the bottom of the tank as more sludge.

      Once that happens water is removed from the top of the tank, and dried sludge is removed from bottom of the tank. This sludge can be used as manure in fields.

     ![wastewater treatment step 4 aeration](/learning-items/grade7/wastewater-treatment-aeration-step-4.jpeg)

     ---
      ___Note__: Here is a great 10-second video that shows how air is added to wastewater._
    `,
        videoId: "Vrg24QMOPPQ",
        startTime: 40,
        endTime: 50,
      },
      {
        id: "sludge-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Dried _________ is used as manure in fields.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "clarified water",
          },
          {
            id: "opt2",
            text: "sludge",
          },
          {
            id: "opt3",
            text: "grit",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: dedent`This is incorrect.

        Dried clarified water does not make sense. And it is definitely not used as manure.`,
          },
          {
            answerSet: ["opt2"],
            response: dedent`__Correct__.

        Dried sludge is used as manure in fields. Sludge is solid poop or faeces that settles at the bottom of a tank in the wastewater treatment facility.`,
          },
          {
            answerSet: ["opt3"],
            response: dedent`This is not correct.

        Grit means small pieces of sand. Sand is not used as manure in fields.`,
          },
        ],
      },
      {
        id: "wastewater-treatment-step-5",
        time: 1,
        kind: "image",
        title: "Step 5 In Wastewater Treatment: Disinfection",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    In this step, the wastewater is further disinfected (or cleaned) by using ultraviolet light or by adding chemicals like ozone and chlorine.

    After this step the clean water is released into rivers or the ocean.
`,
        imagePath: "/learning-items/grade7/wastewater-treatment-disinfection-step-5.jpeg",
      },
      {
        id: "wastewater-to-water",
        kind: "textResponse",
        time: 5,
        title: "How Is Wastewater Cleaned?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Describe the steps involved in converting wastewater to clean water.

    Write your answer in the box below.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student who answered this quiz:",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            First Step - A bar screen is used to remove large things like plastic, twigs, napkins from the wastewater.

            Second Step - The water flows through a large tank. Heavy particles like grit, sand, stone, mirrors settle down due to the force of gravity. Water is flowing way too fast through this tank for other impurities like poop to settle down.

            Third Step - The water is slowed down further in another tank. Here human faeces settle down as sludge at the bottom. And oil floats at the top. They are both removed. The remaining water is called clarified water.

            Fourth Step - Air is added to water. This air helps aerobic bacteria to grow. These bacteria consume human and food waste and settle down at the bottom of the tank as sludge.

            Fifth Step - The water is disinfected using chemicals like ozone and chlorine. The water is then released in rivers.
            `,
              },
            ],
          },
        },
      },
      {
        id: "not-down-the-drain",
        time: 1,
        kind: "image",
        title: "What Not To Throw Down The Drain",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We should not throw the following things down the sink or the drain:

     - Cooking oil: The oil can harden and block the sewer pipes.
     - Chemicals like paints: These chemicals can kill the bacteria that purify water.
     - Tea leaves: They can choke or block the sewer.

     We should throw these things in the dustbin.
     `,
        imagePath: "/learning-items/grade7/oil-paint-tea-leaves-donot-throw-drain.jpeg",
      },
      {
        id: "drain-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Fill In The Blank",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Drains get blocked by __________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "cooking oil",
          },
          {
            id: "opt2",
            text: "fats",
          },
          {
            id: "opt3",
            text: "tea leaves",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. Cooking oil can harden or solidify in the drain and can block sewers.",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct__. Fats can solidify in the drain and can block sewers.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. Tea leaves can block the drain. They should be thrown in the dustbin instead.",
          },
        ],
      },
      {
        id: "defecating-public-places",
        time: 1,
        kind: "image",
        title: "Defecation In Public Places",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Defecation means pooping.

    Defecating and urinating in public places is bad because:
    - Human waste can mix with groundwater.
    - We use groundwater for drinking and washing purposes.
    - Water polluted with human waste can cause water-borne diseases like cholera and typhoid. `,
        imagePath: "/learning-items/grade7/urinating-defecating-public-places.jpeg",
      },
      {
        id: "crossword-puzzle",
        kind: "imageResponse",
        time: 7,
        locked: true,
        title: "Crossword Puzzle",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![chapter 18 wastewater story crossword puzzle](/learning-items/grade7/chapter-18-crossword-wastewater.jpeg)
    Solve this crossword puzzle.

    Then upload a picture of your solution in the box below.`,
        hacks: {
          afterBody: {
            show: "locked",
            preface: "Here is the solution:",
            feedbackImagePath:
              "/learning-items/grade7/chapter-18-crossword-wastewater-solution.jpeg",
          },
        },
      },
    ],
  },
  {
    id: " 17",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter17--thumbnail.jpg",
    title: "Forests: Our Lifeline",
    description:
      "Watch videos to learn Chapter 17, Forests: Our Lifeline, from the NCERT science book in Class 7. Try questions and answers on humus, canopy and seed dispersal.",
    items: [
      {
        id: "chapter-17-video",
        kind: "video",
        time: 2,
        title: "A Walk Through The Forest",
        instructions: dedent`
      In this video we walk through the forest and think about these ideas:
       - humus
       - canopy
       - forests and oxygen
    `,
        videoId: "1_axgwGfCHw",
      },
      {
        id: "humus-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Quiz on Plants",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![dead leaves plants](/learning-items/grade7/dead-plants.jpg)

     Micro-organisms act upon dead plants to produce _________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "sand",
          },
          {
            id: "opt2",
            text: "mushrooms",
          },
          {
            id: "opt3",
            text: "humus",
          },
          {
            id: "opt4",
            text: "wood",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is incorrect. Sand is produced from stones and rocks.",
          },
          {
            answerSet: ["opt2"],
            response: "No, this is not correct. ",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. Micro-organisms decompose dead plants to create a dark coloured substance in soil called humus. Humus improves the fertility of soil.",
          },
          {
            answerSet: ["opt4"],
            response: "No, this is not correct. ",
          },
        ],
      },
      {
        id: "what-is-tree-crown",
        time: 1,
        kind: "image",
        title: "What is a Tree Crown?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The branchy part of the tree above the stem is called the crown.

    The word crown usually refers to an ornament worn by someone on the __top__ of their head — like a king or a queen. ![crown](/learning-items/grade7/crown-2.png)

    Similarly, the __top__ of the tree, is also called a crown. `,
        imagePath: "/learning-items/grade7/tree-crown.jpeg",
      },
      {
        id: "canopy-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Tree Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![overlapping leaves canopy](/learning-items/grade7/forest-canopy.jpeg)

     Overlapping leaves and branches of many trees that together look like the roof of a forest is called _________.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "crown",
          },
          {
            id: "opt2",
            text: "canopy",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is incorrect. The top of a single tree is called a crown.",
          },
          {
            answerSet: ["opt2"],
            response: "__Correct__. A canopy is formed by a collection of tree crowns.",
          },
        ],
      },
      {
        id: "understorey",
        time: 1,
        kind: "image",
        title: "Understorey",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Understorey comprises of all trees growing between the canopy and forest floor.

    You can think of _understorey_ as all plants growing below the canopy and above the forest floor.`,
        imagePath: "/learning-items/grade7/understorey.jpeg",
      },
      {
        id: "herbs-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Forest Layers Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![herbs layer](/learning-items/grade7/understorey-quiz.jpeg)

     Herbs form the ________ layer in the forest.
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "top",
          },
          {
            id: "opt2",
            text: "lowest",
          },
          {
            id: "opt3",
            text: "middle",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Giant trees form the top layer in a forest. Herbs, on the other hand, are short plants with tender stems.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. Herbs are short plants and form the lowest layer in the forest.",
          },
          {
            answerSet: ["opt3"],
            response:
              "This is incorrect. Shrubs and tall grasses form the middle layer in the forest.",
          },
        ],
      },
      /*{
    id: 'balance-of-gases',
    time: 1,
    kind: 'image',
    title: 'Balance of Oxygen and Carbon dioxide',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Plants use carbon dioxide and produce oxygen. And humans need oxygen.

    More than 20% of the world’s oxygen is produced by the trees in the Amazon rainforest.`,
    imagePath: '/learning-items/grade7/forests-balance-oxygen-carbon-dioxide.jpeg',

  },*/ {
        id: "humus",
        time: 1,
        kind: "image",
        title: "Humus",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Dead leaves and plants are decomposed by worms and bacteria into a dark coloured substance called humus.

    Humus helps the soil retain moisture and thus is very helpful in droughts. Humus also has nutrients needed by plants; thus humus makes the soil more fertile.`,
        imagePath: "/learning-items/grade7/leaves-decompose-humus-earthworms.jpeg",
      },
      {
        id: "decomposers-quiz",
        kind: "textResponse",
        time: 6,
        short: true,
        title: "Decomposers",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![worms decomposers](/learning-items/grade7/worms-2.jpg)

    What are decomposers? Name any two of them. What do they do in the forest?`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            Organisms that convert dead plants and animals into humus are called Decomposers.

            Examples include: worms, bacteria, fungi.

            Decomposers turn dead things into humus. Humus makes the soil more fertile.`,
              },
            ],
          },
        },
      },
      {
        id: "how-animals-help-forests",
        time: 1,
        kind: "image",
        title: "How Animals Help Forests",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Animals can spread tree seeds in a forest, and thus help the forest grow.

    Consider a raccoon, an animal found in the forests of North America. A raccoon eats fruits from a tree including the seeds inside the fruit.

    A few hours later, the raccoon poops out waste, which includes seeds they had previously eaten. These seeds now have a chance to blossom into a new fruit tree.

    Animals like the raccoon can help regenerate forests by dispersing the seeds of trees.`,
        imagePath: "/learning-items/grade7/seed-dispersal-animals-raccoon.jpeg",
      },
      {
        id: "birds-spreading-seeds",
        kind: "video",
        time: 2,
        title: "Birds Spreading Seeds",
        instructions: dedent`
      Watch this short video to see how birds spread seeds and help a forest grow.
    `,
        videoId: "qQnaIZtbv18",
        startTime: 20,
      },
      {
        id: "animal-poop-ferilizer",
        kind: "video",
        time: 2,
        title: "Animal Poop is Good for Trees",
        instructions: dedent`
      Animal poop is rich in nitrogen and provides nutrients for trees to grow. Animal dung (or poop) acts as fertilizer for plants.

      In this video, we will see how an animal gets some nourishment from a pitcher plant, and in turn offers its poop to the plant.
    `,
        videoId: "TwL7K_loRjM",
      },
      {
        id: "dead-animals-turn-into-humus",
        kind: "video",
        time: 1,
        title: "Dead Animals turn into Humus",
        instructions: dedent`
      Much like dead leaves, dead animals are decomposed by micro-organisms into humus.

      Thus, even the dead bodies of animals are useful for plants in the forests.

      This video was recorded over 7 days, and is played in fast forward mode.
    `,
        videoId: "C6sFP_7Vezg",
      },
      {
        id: "animal-help-forests-quiz",
        kind: "textResponse",
        time: 6,
        //short: true,
        title: "How Animals Help Forests",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![animals forests](/learning-items/grade7/animals-seed-dispersal.jpeg)

    Explain how animals living in the forest help it grow and regenerate.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            Here are some ways I can think in which animals help grow the forests:

             1) Animals help in seed dispersal. They eat fruits, and when they poop, the seeds are deposited. These seeds can turn into new trees.

             2) Dead bodies of animals are converted to humus after decomposition. This increases the fertility of soil.

             3) Animal poop acts as a fertilizer for the soil in the forest.
            `,
              },
            ],
          },
        },
      },
      {
        id: "forests-water-cycle-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Forests and Water Cycle",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      Which process is taking place in the image below?

      _Hint:_ This photo was taken by a satellite and shows part of the Amazon rainforest in South America.

      ![amazon rainforest transpiration condensation](/learning-items/amazon-transpiration-condensation.jpeg)`,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Collection of Ground Water",
          },
          {
            id: "opt2",
            text: "Transpiration",
          },
          {
            id: "opt3",
            text: "Flood",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. We are looking at an image of a forest from space. Ground water is not visible here.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct.__ The most likely thing that is happening in this picture is that the trees in the forest are losing water through Transpiration. And that water vapour is then condensing to form clouds, which rains down on earth.",
          },
          {
            answerSet: ["opt3"],
            response: "This is incorrect. ",
          },
        ],
      },
      {
        id: "products-from-forests",
        time: 1,
        kind: "image",
        title: "Products from Forests",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We get a large number of products from forests. They include honey, wax, gum, wood, paper, oil and medicines.

    In fact, more than 25% of medicines we use originate in rainforests around the world.

    Below you will see two examples of medicines that originate in forests and are used to treat asthma and cancer.`,
        imagePath: "/learning-items/grade7/medicines-from-forests-asthma-cancer.jpeg",
      },
      {
        id: "forests-products-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Pick the Odd One",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
      ![forest](/learning-items/grade7/forests-quiz.jpeg)

      Which of the following is __not__ a forest product? `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Gum",
          },
          {
            id: "opt2",
            text: "Plywood",
          },
          {
            id: "opt3",
            text: "Sealing Wax",
          },
          {
            id: "opt4",
            text: "Kerosene",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Gum is secreted by many trees in the forest including Plum trees.",
          },
          {
            answerSet: ["opt2"],
            response: "This is incorrect. Wood is plentiful in the forest.",
          },
          {
            answerSet: ["opt3"],
            response: "This is incorrect. Wax is obtained from trees in the forest.",
          },
          {
            answerSet: ["opt4"],
            response:
              "__Correct__. Kerosene and other petroleum products are dug up from under the ground.",
          },
        ],
      },
      {
        id: "how-forests-prevent-flood",
        time: 1,
        kind: "image",
        title: "How Forests Prevent Floods",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Forests slow down the fall of rain water.

    It can take up to 10 minutes for a falling raindrop to travel from a rainforest\`s thick canopy to the floor of the forest.

    This extra time allows the water that reaches the floor to seep underground before more water gathers. Floods are prevented since forests do not allow the rain water to gather or accumulate.`,
        imagePath: "/learning-items/grade7/how-forests-prevent-floods.jpeg",
      },
      {
        id: "soil-erosion",
        time: 1,
        kind: "image",
        title: "How Forests Prevent Soil Erosion",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Roots of forest trees bind soil together. But if trees are not present, then soil is washed away or eroded.

    In this picture you can observe that in the absence of trees, soil is eroded into the sea.`,
        imagePath: "/learning-items/grade7/soil-erosion.jpeg",
      },
      {
        id: "forests-prevent-floods-quiz",
        kind: "textResponse",
        time: 6,
        short: true,
        title: "Forests and Floods Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![animals forests](/learning-items/grade7/forests-quiz.jpeg)

    How do forests prevent floods?`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Koushiki",
                imagePath: "/fake-responses/koushiki.png",
                response: dedent`
            The first thing we have to think about is the canopy of a forest. It is the overlapping leaves and branches of trees high up in the forest.

            The canopy is thick and it slows down the movement of rainwater.

            Since rainwater takes more time to reach the forest floor, water does not accumulate. In this way, forests prevent floods.
            `,
              },
            ],
          },
        },
      },
      {
        id: "forests-in-india",
        time: 1,
        kind: "image",
        title: "Forests in India",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    21% of India is under forest cover.`,
        imagePath: "/learning-items/grade7/india-area-under-forest.jpeg",
      },
      {
        id: "deforestation",
        time: 1,
        kind: "image",
        title: "Deforestation",
        locked: true,
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Deforestation is the destruction of forests to make land available for other uses like farming and animal grazing.

    Every second an area of the rainforest the size of a football pitch is cut down.`,
        imagePath: "/learning-items/grade7/deforestation.jpeg",
      },
    ],
  },
  {
    id: " 13",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter13-thumbnail2.jpeg",
    title: "Motion and Time",
    description:
      "Watch videos to learn Chapter 13, Motion And Time, from the NCERT science book in Class 7. Try questions and answers on pendulums.",
    items: [
      {
        id: "chapter-13-video",
        kind: "video",
        time: 5,
        title: "How Pendulums Work",
        instructions: dedent`
      We travel to Japan in this video to see the largest pendulum clock in the world. And then to a tall building with pendulums on the roof.

      While doing that, we answer these questions:
       - Why are pendulums used in clocks?
       - Will a heavier pendulum swing faster than a lighter pendulum?
       - Other than clocks, where are pendulums used?
    `,
        videoId: "ivaWog3Vayk",
      },
      {
        id: "pendulum-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Pendulum Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![pendulum swinging](/learning-items/grade7/pendulum-time-period.jpeg)

     The time taken for the pendulum to swing from O to B, then from B to A, and then back to O is called _________?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Time Period",
          },
          {
            id: "opt2",
            text: "Oscillation",
          },
          {
            id: "opt3",
            text: "Bob",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. Time period is the time taken by a pendulum to complete one full oscillation. If we begin measuring time from the position labelled O (otherwise known as equilibrium point), then it is the time taken for the pendulum to return back to that position O.",
          },
          {
            answerSet: ["opt2"],
            response:
              "No, this is not correct. Oscillation means to move back and forth around a central point.",
          },
          {
            answerSet: ["opt3"],
            response: "No, this is not correct. Bob is the name of the ball in the pendulum.",
          },
        ],
      },
      {
        id: "draw-what-you-have-learned",
        kind: "imageResponse",
        time: 5,
        title: "Draw and Share",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![partial pendulum](/learning-items/grade7/partial-pendulum.jpeg)

    I hope you watched the video on pendulums in the beginning of this chapter.

    Now use a _pen and paper_ to draw a picture that shows everything you learned from that video on pendulums.

    Then take a photo of the drawing from your phone and share it here.`,
      },
      {
        id: "speed-video",
        kind: "video",
        time: 1,
        title: "What is Speed?",
        instructions: dedent`
      Speed is how fast an object moves. Here is the formula:

      Speed = Distance / Time

      Here is a video that can help you remember this formula.
    `,
        videoId: "--LkIupj0jI",
      },
      {
        id: "what-is-the-speed",
        time: 1,
        kind: "image",
        title: "How Fast?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    How fast does a cheetah run?

    How fast does Usain Bolt, Olympic gold medal winner, run?

    What is the speed of the earth per second`,
        imagePath: "/learning-items/grade7/speed-cheetah.jpeg",
      },
      {
        id: "speed-quiz",
        kind: "multipleChoiceResponse",
        time: 2,
        title: "What is the Speed?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![car speed](/learning-items/grade7/car.jpeg)

     Imagine a car goes from point A to point B.

     The speed of the car was 40 km per hour and the it took 1 hour to finish the journey . Given this information, will you be able to calculate the distance between the two points?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Yes",
          },
          {
            id: "opt2",
            text: "No",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. Speed = Distance / Time. Therefore Distance = Speed X Time. We know the speed (40 km per hour). We know the time (1 hour). Therefore the distance between the two points is 40 X 1 = 40 kilometres.",
          },
          {
            answerSet: ["opt2"],
            response: "Hmm. Given this information, we think you can calculate the distance.",
          },
        ],
      },
      {
        id: "calculate-the-speed",
        kind: "multipleChoiceResponse",
        time: 2,
        title: "Speed Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![car speed](/learning-items/grade7/train2.jpg)

     The distance between two stations in 240 km. A train takes 4 hours to cover this distance.

     What is the speed of this train?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "960 km per hour",
          },
          {
            id: "opt2",
            text: "60 km",
          },
          {
            id: "opt3",
            text: "60 km per hour",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. Speed = Distance / Time. It seems you have multiplied distance (240 km) and time (4 hours) to get this answer.",
          },
          {
            answerSet: ["opt2"],
            response:
              "This is incorrect. Speed = Distance / Time. So, 240 / 4 = 60. But the units of speed need to be km per hour and not km.",
          },
          {
            answerSet: ["opt3"],
            response:
              "__Correct__. Speed = Distance / Time. So, 240 km / 4 hours = 60 km per hour.",
          },
        ],
      },
      {
        id: "speed-units",
        kind: "video",
        time: 3,
        title: "Units of Speed",
        instructions: dedent`
      Speed is measured in kilometres per hour. For instance, we may say that a car moves at 50 km per hour.

      We can show this in a different way.

      We can say that the same car moves at 14 metres per second.

      This video shows how to convert speed from kilometres per hour to metres per second.
    `,
        videoId: "2M_FC4nKqag",
        endTime: 200,
      },
      {
        id: "change-units",
        kind: "multipleChoiceResponse",
        time: 3,
        title: "Changing Units",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
     Convert 90 km per hour into metres per second (m/s).

     What is the answer?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "10 m/s",
          },
          {
            id: "opt2",
            text: "20 m/s",
          },
          {
            id: "opt3",
            text: "25 m/s",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "This is incorrect. ",
          },
          {
            answerSet: ["opt2"],
            response: "No, not correct.",
          },
          {
            answerSet: ["opt3"],
            response: "__Correct__.",
          },
        ],
      },
      {
        id: "what-is-an-odometer",
        time: 1,
        kind: "image",
        title: "What is an Odometer?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    A speedometer measures speed.

    An odometer measures the distance travelled by an object.

    We can find odometers in the dashboard of a car.`,
        imagePath: "/learning-items/grade7/odometer.jpeg",
      },
      {
        id: "what-is-a-line-graph",
        kind: "video",
        time: 2,
        title: "What is a Line Graph?",
        instructions: dedent`
      A line graph is a picture that shows points on a graph connected by a line.

      In this video, we create a line graph to show how many apples were eaten in a month.
    `,
        videoId: "n2YkbdNORp8",
        endTime: 200,
      },
      {
        id: "more-line-graph",
        kind: "video",
        time: 6,
        title: "How to read a Line Graph",
        instructions: dedent`
      Here is another video that teaches how to read a line graph.
    `,
        videoId: "ZTrAuUjcYVw",
        endTime: 330,
      },
      {
        id: "distance-time-graph",
        kind: "video",
        time: 9,
        title: "Distance Time Graph",
        instructions: dedent`
      Distance time graph shows the amount of distance travelled over time. In other words, it shows the speed of an object.
    `,
        videoId: "qb82WZeWN8g",
        startTime: 9,
        endTime: 405,
      },
      {
        id: "exercises-chapter13",
        time: 10,
        kind: "image",
        title: "Exercises from Chapter 13",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![tornadoes](/learning-items/grade7/chapter-13.jpeg)

    There are some tough questions in the exercises at the end of Chapter 13 in the science book.

    These two videos — [Video 1](https://www.youtube.com/watch?v=28iBkdkdtjk) and [Video 2](https://www.youtube.com/watch?v=VYy3Tl0Kmfw) — will guide you through those questions.
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
        locked: true,
      },
    ],
  },
  {
    id: " 14",
    thumbnailImagePath: "/chapter-thumbnails/grade7/grade7-chapter14-thumbnail.png",
    title: "Electric Current and its Effects",
    description:
      "Learn Chapter 14, Electric Current And Its Effects, in the Class 7 NCERT science book by watching videos, answering questions, and viewing solutions.",
    items: [
      {
        id: "chapter-14-video",
        kind: "video",
        time: 4,
        title: "When A Wire Becomes A Magnet",
        instructions: dedent`
      When current flows through a wire, it acts like a magnet.

      This fundamental fact has changed our lives. We have used this knowledge to build things like doorbells, computers, cars and really fast trains.

      Let us travel to Japan in this video to see how this works.
    `,
        videoId: "oSgYB1UJW0I",
      },
      {
        id: "electromagnet-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Electromagnet Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![electric wires](/learning-items/grade7/electric-wires.jpeg)

     When electric current flows through a wire, the wire behaves like a _________?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Stone",
          },
          {
            id: "opt2",
            text: "Magnet",
          },
          {
            id: "opt3",
            text: "Pendulum",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response: "No, this is not correct.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. When electric current flows through a wire, the wire starts acting like a magnet.",
          },
          {
            answerSet: ["opt3"],
            response: "No, this is not correct.",
          },
        ],
      },
      {
        id: "magnetic-effect-of-current",
        kind: "video",
        time: 1,
        title: "Magnetic Effect of Current",
        instructions: dedent`
      When current flows through a wire, it acts like a magnet.

      In this video a coil of wire is connected to a battery and a compass is placed inside the coil. Before the coil is connected to the battery, the compass points towards the Earth\'s north pole.

      As soon as the coil of wire is connected to the battery, current starts flowing through the coil. At that point, the coil starts acting like a magnet. The compass feels the influence of this new magnet and thus moves.
    `,
        videoId: "AgZHqfIBkUI",
        startTime: 5,
      },
      {
        id: "make-an-electromagnet",
        kind: "video",
        time: 2,
        title: "Making An Electromagnet",
        instructions: dedent`
      This video shows how to use simple materials like a nail, wire, battery and paper clips to create an electromagnet that can lift things.

      _Note:_ We use a nail when making an electromagnet in this example because that helps us to create a stronger magnet.
    `,
        videoId: "bH2VpzHtIh0",
        startTime: 41,
        endTime: 142,
      },
      {
        id: "electromagnet-quiz-2",
        kind: "textResponse",
        time: 3,
        short: true,
        title: "Electromagnet Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![plastic bags](/learning-items/grade7/plastic-bags-2.jpeg)

    Do you think an electromagnet can be used to separate plastic bags from a heap?`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student named Koushiki",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Koushiki",
                imagePath: "/fake-responses/koushiki.png",
                response: dedent`
            Plastic bags are not magnetic.

            So no, an electromagnet, or any other magnet, will not be able to separate a plastic bag from a heap.

            An electromagnet will be able to find a needle in a pile of grass.
            `,
              },
            ],
          },
        },
      },
      {
        id: "why-electromagnets",
        time: 4,
        kind: "image",
        title: "Optional - The Why Question",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Why does an electric wire become a magnet when current passes through it?

    To understand this we have to understand the meaning of the word _fundamental_.

    The word fundamental means something that is basic or something that cannot be reduced to any further parts.
    Example: Why do things fall? Because of gravity. Why does gravity exist? It just does. It is _fundamental_. Gravitational forces cannot be reduced into any additional forces.

    Now I know that answer can be dissatisfying.

    But concepts like gravitation and electromagnets are considered to be fundamental in nature, which means that is no more explanation for them.

    _References:_ [Source 1](https://physics.stackexchange.com/questions/43393/why-does-electricity-flowing-through-a-copper-coil-generate-a-magnetic-field); [Source 2](https://en.wikipedia.org/wiki/Fundamental_interaction)

    ---

    If you are still curious, here is a [video of a famous scientist explaining](https://www.youtube.com/watch?v=36GT2zI8lVA) the difficulty with answering why questions.
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "electric-bell",
        kind: "video",
        time: 1,
        title: "How An Electric Bell Works",
        instructions: dedent`
      See how an electromagnet is used to make a doorbell.
    `,
        videoId: "2Y80QG-F7Fs",
      },
      {
        id: "circuit-symbols",
        time: 1,
        kind: "image",
        title: "Symbols for Electric Components",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here are some symbols that are used to represent electrical components like bulb and cells in a circuit.

    A diagram that uses these symbols to show an electric circuit is called a circuit diagram. `,
        imagePath: "/learning-items/grade7/electric-symbols.jpeg",
      },
      {
        id: "how-to-draw-a-circuit-diagram",
        kind: "video",
        time: 1,
        title: "How to Draw a Circuit Diagram",
        instructions: dedent`
      This video will teach you how to draw a circuit diagram. You may remember that the symbol for the bulb is drawn in this manner: ![electric bulb symbol ](/learning-items/grade7/bulb-1.jpeg)

      This video uses the following symbol for the bulb: ![electric bulb symbol ](/learning-items/grade7/bulb-2.jpeg) It is ok to use this symbol.
    `,
        videoId: "taszKVykMBQ",
      },
      {
        id: "why-use-circuit-symbols",
        time: 1,
        kind: "image",
        title: "Why Use Electric Symbols",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Why do we use symbols when drawing components like bulbs and cells in a circuit?

    Well, it can be easy to draw a circuit with these symbols.

    Consider a circuit with a few cells and several bulbs like the one in the image below. It would be hard to draw this circuit as it is shown in the picture. The easy thing to do would be to use symbols for components like bulb and cells to draw the circuit.`,
        imagePath: "/learning-items/grade7/electric-circuit-without-symbols.jpeg",
      },
      {
        id: "remembering-symbol-for-cell",
        time: 1,
        kind: "image",
        title: "Symbol for Cell",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    In the symbol of the electric cell, the positive end is shown using a long line, and the negative end is shown using a short line.

    This can be hard to remember. The image below will help you remember this detail.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/cell-battery-symbol-gif.gif)
    `,
        imagePath: "/learning-items/white-space-2.jpeg",
      },
      {
        id: "circuit-diagram-symbol",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Will The Bulb Glow?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![electric wires](/learning-items/grade7/will-it-glow-bulb.jpeg)

     Will the bulb in this circuit diagram light up?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Yes",
          },
          {
            id: "opt2",
            text: "No",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "__Correct__. The circuit is closed. That means that the switch is turned ON and therefore electricity will flow through the circuit and the bulb will glow.",
          },
          {
            answerSet: ["opt2"],
            response:
              "No, this is not correct. The bulb will glow. The switch is in the ON position and thus the bulb will light up.",
          },
        ],
      },
      {
        id: "draw-a-circuit-diagram",
        kind: "imageResponse",
        time: 5,
        title: "Draw a Circuit Diagram",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Use a pen and paper to draw the following circuit:

    _A circuit that contains a light bulb, a battery and an OFF switch._

    Then take a photo of your drawing from a phone and upload it here.`,
      },
      {
        id: "connecting-cells-quiz",
        kind: "multipleChoiceResponse",
        time: 1,
        title: "Connecting Cells Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![electric wires](/learning-items/grade7/connecting-cells-to-make-battery-wrong.jpeg)

     There are 4 cells in this image that are connected with wires.

     Are the cells connected in the correct way?
      `,
        maxSelected: 1,
        choices: [
          {
            id: "opt1",
            text: "Yes",
          },
          {
            id: "opt2",
            text: "No",
          },
        ],
        automaticResponses: [
          {
            answerSet: ["opt1"],
            response:
              "This is incorrect. The cells are not connected properly. For electricity to flow, the positive end of one cell needs to be connected to the negative end of another cell. The two cells on the right side of the picture are not connected properly.",
          },
          {
            answerSet: ["opt2"],
            response:
              "__Correct__. The cells in this image are not connected properly. The negative ends of the two cells on the right side of the picture are connected to each other. To make things work the negative end of one cell needs to be connected to the positive end of another cell.",
          },
        ],
      },
      {
        id: "circuit-diagram-quiz",
        kind: "textResponse",
        time: 3,
        short: true,
        title: "Circuit Diagram Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![circuit diagram](/learning-items/grade7/connecting-cells-to-form-battery.jpeg)

    What change would you make in this circuit diagram to make the bulb glow?`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student named Sid",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Sid",
                imagePath: "/fake-responses/sid.png",
                response: dedent`
            There are 2 cells that make a battery in this circuit.

            But those cells are not connected properly. The positive ends of the cells are connected together, which is wrong.

            I will turn one of the cells so that the positive end of one cell is connected to the negative end of the other cell. This way electricity will start flowing through the circuit and the bulb will light up.
            `,
              },
            ],
          },
        },
      },
      {
        id: "heating-effect-of-current",
        time: 1,
        kind: "image",
        title: "Heating Effects of Current",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Metals give off heat when current passes through them. Specially a metal named Nichrome, which is a mix of Nickel and Chromium.

    Nichrome is used in several household appliances, like a toaster.`,
        imagePath: "/learning-items/grade7/heating-effect-current-nichrome.jpeg",
      },
      {
        id: "nichrome-heat",
        kind: "video",
        time: 2,
        title: "Heating a Nichrome Wire",
        instructions: dedent`
      When we heat a Nichrome wire, it starts to glow and give off heat.

      As we increase the amount of current through the nichrome wire, it gives off even more heat. Watch this video to see that effect.

      While watching this video, do not worry about what the narrator is saying. All he is doing is increasing the amount of current passing through the wire.
    `,
        videoId: "2HhLfvstD9E",
        endTime: 93,
      },
      {
        id: "what-is-a-fuse",
        time: 1,
        kind: "image",
        title: "What is a Fuse?",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    Here are two examples of what a fuse looks like.

    A fuse is a thin wire in an electrical circuit that melts when too much current flows through it.`,
        imagePath: "/learning-items/grade7/what-does-a-fuse-look-like.jpeg",
      },
      {
        id: "fuse-inside-plug",
        time: 1,
        kind: "image",
        title: "Fuse Inside a Plug",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    We can find a fuse inside an electrical plug.

    Imagine this plug is connected to a toaster. Further imagine if suddenly there is an excessive amount of current flowing through the wires. This current will certainly damage the toaster.

    The fuse can protect the toaster.

    This thin wire melts when too much current flows through it. This means that the circuit is no longer complete and current stops flowing through the toaster.`,
        imagePath: "/learning-items/grade7/fuse-inside-electric-plug.jpeg",
      },
      {
        id: "fuse-inside-ac",
        time: 1,
        kind: "image",
        title: "Fuse Inside an Air Conditioner",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    The electrical circuit of an air conditioner also has a fuse.

    The fuse protects the air conditioner in case a large amount of current starts flowing through the circuit.`,
        imagePath: "/learning-items/grade7/fuse-inside-air-conditioner.jpeg",
      },
      {
        id: "how-does-a-fuse-work",
        kind: "video",
        time: 1,
        title: "How Does a Fuse Work?",
        instructions: dedent`
      Appliances like heaters, televisions and air conditioners run on electricity. These appliances can catch fire or be destroyed if a large current is passed through them.

      A fuse can solve this problem.

      A fuse is a metal wire that melts when too much current flows through it. So if a fuse is a part of an electrical circuit, and a large amount of current flows through the circuit, then the fuse will melt.

      Once the fuse melts the circuit is no longer fully connected and thus the flow of current will stop; that will protect the appliance from getting destroyed.

      In this video current is passed through a fuse. The amount of current is then increased. After a point, the fuse becomes red hot and melts.
    `,
        videoId: "QjE1k17MsqM",
      },
      {
        id: "electrician-quiz",
        kind: "textResponse",
        time: 3,
        short: true,
        title: "Electrician Quiz",
        presenterImagePath: "/instructors/kunal2.jpg",
        instructions: dedent`
    ![electrician](/learning-items/grade7/electrician.jpeg)

    An electrician is carrying some repairs in your house. He wants to replace a fuse with a piece of wire. Would you agree? Give reasons.`,
        hacks: {
          afterBody: {
            preface: "Here is a response from another student named Prabsimar",
            show: "locked",
            fakePeerResponses: [
              {
                studentName: "Prabsimar",
                imagePath: "/fake-responses/prabsimar.png",
                response: dedent`
            No, I will not agree with the electrician.

            The wire used for making a fuse has a low melting point and therefore any random wire cannot be used to replace the fuse.
            `,
              },
            ],
          },
        },
      },
      {
        id: "how-steady-is-your-hand",
        kind: "video",
        time: 2,
        title: "Game - How Steady is Your Hand?",
        instructions: dedent`
      Use simple materials to make a game that can tell if your hand is steady.
    `,
        videoId: "LdKPos_fgUY",
        endTime: 164,
        locked: true,
      },
    ],
  },
];
