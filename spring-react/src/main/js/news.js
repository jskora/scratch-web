'use strict';

const React = require('react');
const client = require('./client');

export default class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/newsStories'}).done(response => {
            this.setState({
                news: response.entity._embedded.newsStories
            });
        });
    }

    render() {
        return (
            <NewsStoryList newsStories={this.state.news}/>
        )
    }
}

class NewsStoryList extends React.Component{
    render() {
        var newsStories = this.props.newsStories.map(newsStory =>
            <NewsStory key={newsStory._links.self.href} newsStory={newsStory}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Text</th>
                </tr>
                {newsStories}
                </tbody>
            </table>
        )
    }
}

class NewsStory extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.newsStory.storyTitle}</td>
                <td>{this.props.newsStory.storyAuthor}</td>
                <td>{this.props.newsStory.storyText}</td>
            </tr>
        )
    }
}
