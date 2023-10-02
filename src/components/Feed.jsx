import React from "react";
import QuestionsAnswers from "./QuestionsAnswers";
import QuestionList from "./QuestionList";
import "../style/Feed.css";

function Feed() {
  const questionAndAnswers = [
    {
      id: 1,
      answeredBy: "Somnath Paul",
      questionedBy: "Akash Sharma",
      question: "What are some things to remember if you love an introvert?",
      answer: [
        {
          newAns: `Introverts are not what people think.

        I’m a full-blown introvert and there’s a long list of stupid assumptions people make about us: that we hate people, that we are shy and cowing away from interaction, that we don’t like talking or leaving the house.
        
        And the king sh#t that drives me nuts: that introverts need to be fixed and turned into an extrovert.
        
        I dealt with so much fighting in one relationship because my partner was an extrovert (who, rightfully, worked in sales). She couldn’t understand why I didn’t like being at cramped, crowded concerts or big social events for long hours.
        
        Introversion is an expression of how we gain or lose energy.
        
        Introverts enjoy people and doing things — but on our own terms. We tend to like smaller groups. We are more selective in who we hang out with and what we do.`,
          newAnsBy: "Somnath Paul",
        },
      ],
      reaction: "555",
      isReacted: false,
    },
    {
      id: 2,
      answeredBy: "Kamal Rastogi",
      questionedBy: "Arun Tiwari",
      question: "What is the biggest lesson you learned that no one teaches?",
      answer: [
        {
          newAns: `No matter how much you try, you'll miss something in your life everytime.

          • The more you care, the more you lose.
          
          • If you don't go after what you want, you'll never have it.
          
          • If you don't ask, the answer is always no.
          
          • If you don't step forward, you're always in the same position.
          
          • Don't trust on your luck, it can be changed at anytime.
          
          • No matter how slow you progress, but you're still ahead of everyone who is not trying.
          
          • The one who gives more has always been cheated whether it is love or trust.
          
          • With time, only discipline and perseverance takes you forward.
          
          • Sit alone, you'll find all your answers.`,
          newAnsBy: "Kamal Rastogi",
        },
      ],
      reaction: "780",
      isReacted: false,
    },

    {
      id: 3,
      answeredBy: "Harsimarat Sidhu",
      questionedBy: "Sushang Agnihotr",
      question: "Why did NASA thank India and China?",
      answer: [
        {
          newAns: `I feel very happy writing this post. After reading this post you might feel the same as me.

          So let's know why NASA thanked India and China.
          
          A new study shows that two countries with the world's largest population are leading the increase in greenery on land.
          
          Putting photos, NASA said that there is more greenery on the Earth than 20 years ago, which has been credited by India and China.
          
          In the last 20 years, India and China have planted quite a lot of trees, you can see it in the picture above.
          
          India is breaking the world record in plantations, with 800,000 Indians planting 50 million trees in just 24 hours.
          
          The most important conclusion from the data is that the increase in green areas on the planet is almost entirely due to human action.
          
          But we do not have to stop now, I request everyone to plant some trees.`,
          newAnsBy: "Harsimarat Sidhu",
        },
      ],
      reaction: "899",
      isReacted: false,
    },
    {
      id: 4,
      answeredBy: "Somnath Paul",
      questionedBy: "Alipriya Lodh",
      question: "What are the things that do not matter in life?",
      answer: [
        {
          newAns: `Trying to be perfectionist. Trust me! You can't, never!
 
          • Trying to make every one happy! It's worthless.
          
          • To find a perfect partner for you. First make yourself perfect and deserving.
          
          • Putting someone else needs before yours. You can't love someone until and unless you love yourself.
          
          • Admiring everyone's point of view! First find yours!
          
          • To go for tempopary pleasure over permanent satisfaction.
          
          • Expecting and complaining.
          
          • Doing things for happiness. Don't! …. Do things for satisfaction. Does reading this answer has bring happiness or satisfaction for you..?
          
          • Upvotes over your answers. It has nothing to do with your life! Don't take it that seriously!`,
          newAnsBy: "Somnath Paul",
        },
      ],
      reaction: "999",
      isReacted: false,
    },
    {
      id: 5,
      answeredBy: "Prashant Mishra",
      questionedBy: "Ankita Roy",
      question: "How do I refresh my mind in five minutes?",
      answer: [
        {
          newAns: `This technique was discussed for the first time by Dr. Win Wenger. I don’t know what it’s called, so I’m naming it - ‘The Head Technique’.

          Sit straight.
          Close your eyes.
          Imagine the boundary of your head.
          Now imagine this boundary expanding by an inch.
          You actually need to ‘see’ the boundary of your head spreading out!
          
          Doing this signals your brain to pump extra oxygen into your blood. It results in instant energy in your body. It takes less than 5 minutes and charges your mind up!`,
          newAnsBy: "Prashant Mishra",
        },
      ],
      reaction: "809",
      isReacted: false,
    },
  ];

  // Check if the questionAndAnswers exists in localStorage
  const storedQuestionAns = localStorage.getItem("questionAndAnswers");

  // Save the data to localStorage if it's not already present
  if (!storedQuestionAns) {
    localStorage.setItem(
      "questionAndAnswers",
      JSON.stringify(questionAndAnswers)
    );
  }
  return (
    <>
      <div className="post-feed">
        <div className="left-container">
          <QuestionsAnswers />
        </div>
        <div className="right-container">
          <QuestionList />
        </div>
      </div>
    </>
  );
}

export default Feed;
