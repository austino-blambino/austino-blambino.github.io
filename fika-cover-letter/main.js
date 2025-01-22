PromptTree.setTree(
    new Prompt("root", thanksText, thanksPrompt, 
        "no", new Prompt("rootNo", rootNoText, thanksPrompt,
            "yes", new PromptPointer("rootYes", null, true),
            "no", new PromptPointer("rootNo", null, true)
        ),
        "yes", new Prompt("rootYes", introText, introPrompt,
            "jobs", new PromptPointer("rootYes", jobsText, false),
            "why fika", new PromptPointer("rootYes", whyText, false),
            "college", new PromptPointer("rootYes", collegeText, false),
            "church", new PromptPointer("rootYes", churchText, false),
            "hobbies", new Prompt("rootYesHobbies", hobbiesText, hobbiesPrompt,
                "coding", new PromptPointer("rootYesHobbies", codingText, false),
                "baking", new PromptPointer("rootYesHobbies", bakingText, false),
                "knife throwing", new PromptPointer("rootYesHobbies", knifeText, false),
                "photography", new PromptPointer("rootYesHobbies", photoText, false),
                "disc golf", new PromptPointer("rootYesHobbies", discText ,false),
                "drawing", new PromptPointer("rootYesHobbies", drawingText ,false),
                "music", new PromptPointer("rootYesHobbies", musicText ,false),
                "back", new PromptPointer("rootYes", null, false)
            )
        )
    )
)

PromptTree.getCurrentPrompt().runFunctions(true)