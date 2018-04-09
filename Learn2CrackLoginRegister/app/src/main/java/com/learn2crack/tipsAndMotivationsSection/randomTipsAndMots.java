package com.learn2crack.tipsAndMotivationsSection;

public class randomTipsAndMots {

    String randTipsAndMots[] = { "Get your hands busy by doing things such as drawing, using a stress ball, playing an instrument or writing a blog.",
                                "Help someone else with anything. Getting out of our own head and thinking about other people gives incredible positive energy.",
                                "Try to avoid simple carbohydrates(sugars) as much as you can to avoid triggering urges.",
                                "Pick a small task that you can finish in under 15 minutes and start with it, no extra thoughts, just start.",
                                "Write down as many motivations as you can in this section of the application. Visit them often for a quick read.",
                                "Think of a positive effect quitting has had on you and tell close supportive friends about it.",
                                "Make a list of every situation you used to smoke in (food, alcohol, etc). Then write small replacement activities next to each item and read them as often as you can.",
                                "Ask yourself several times a day if you are currently grinding your teeth and order them to relax.",
                                "If your head feels heavy, drop everything, go outside for a 10-minute walk and get back to your day.",
                                "Read a lot of articles on benefits of quitting smoking. This will pass time as well as recharge your will power.",
                                "Watch some funny videos on YouTube. It makes a huge difference to get in a few laughs during each day.",
                                "Practice 5 minutes of meditation in the morning to relief yourself from the extra stress and anxiety that might come the first 1-2 weeks of quitting.",
                                "Create an online blog and use any chance you get to fill it with examples of how cigarettes have affected your personal life negatively.",
                                "Always keep a pack of chewing gum in your pocket and keep your mouth busy.",
                                "Drink lots of tea. A warm stomach gives a very satisfying feeling.",
                                "If your withdrawal symptoms are too harsh, think about creating a slow qutting plan instead.",
                                "Try to drink at least 8 glasses of water per day.",
                                "Pick any exercise/physical activity you might enjoy and start it as often as you like. When the body is active, the brain releases feel good chemicals.",
                                "Add several healthy snacks with low calories to your diet. This helps your body fight withdrawal symptoms.",
                                "Half of all smokers die of a smoke related disease."
    };
    int number = 0;

    public String nextTipOrMotivation(){
        number++;
        if(number >= randTipsAndMots.length)
        {
            number = 0;
        }
        return randTipsAndMots[number];
    }

    public String previousTipOrMotivation(){
        number--;
        if(number < 0)
        {
            number = randTipsAndMots.length;
        }
        return randTipsAndMots[number];
    }
}