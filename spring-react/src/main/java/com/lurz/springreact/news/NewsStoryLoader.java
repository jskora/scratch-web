package com.lurz.springreact.news;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class NewsStoryLoader implements CommandLineRunner {

    private final NewsStoryRepository repository;

    @Autowired
    public NewsStoryLoader(NewsStoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... string) throws Exception {
        this.repository.save(new NewsStory("Story 1", "Author 1", "Blah, blah, blah 1."));
        this.repository.save(new NewsStory("Story 2", "Author 2", "Blah, blah, blah 2."));
        this.repository.save(new NewsStory("Story 3", "Author 3", "Blah, blah, blah 3."));
    }
}
