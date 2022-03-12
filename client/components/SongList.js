import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    render() {
        console.log(this.props); // TODO: Remove this after the real data rendering is implemented.

        return (
            <div>
                SongList
            </div>
        );
    }
}

const query = gql`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList);