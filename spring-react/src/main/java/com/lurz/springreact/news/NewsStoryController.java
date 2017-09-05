package com.lurz.springreact.news;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NewsStoryController {

    @RequestMapping(value = "/news")
    public String news() {
        return "news";
    }
}
