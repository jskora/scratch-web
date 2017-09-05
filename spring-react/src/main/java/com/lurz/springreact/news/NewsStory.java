package com.lurz.springreact.news;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class NewsStory {

    private @Id
    @GeneratedValue
    Long id;
    private String storyTitle;
    private String storyAuthor;
    private String storyText;

    private NewsStory() {}

    public NewsStory(String title, String author, String text) {
        this.storyTitle = title;
        this.storyAuthor = author;
        this.storyText = text;
    }
}
