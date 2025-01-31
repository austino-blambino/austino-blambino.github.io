PromptTree.setTree(
    new Prompt("root", thanksText, thanksPrompt, 
        "no", new Prompt("rootNo", rootNoText, thanksPrompt,
            "yes", new PromptPointer("rootYes", null, true),
            "no", new PromptPointer("rootNo", null, true),
        ),
        "yes", new Prompt("rootYes", introText, introPrompt,
            "jobs", new PromptPointer("rootYes", jobsText, false),
            "why fika", new PromptPointer("rootYes", whyText, false),
            "college", new PromptPointer("rootYes", collegeText, false),
            "church", new PromptPointer("rootYes", churchText, false),
            "music", new PromptPointer("rootYes", musicText, false)
        )
    )
)

PromptTree.getCurrentPrompt().runFunctions(true)