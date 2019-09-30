import React, { Component } from 'react'
import me from '../../content/images/me.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <h1>
             I'm Syafrizal
            </h1>
            Saya seorang web developer, senang menulis dan juga sharing seputar IT. Di sini kamu bisa membaca beberapa tulisanku. Semoga bermanfaat.
              {' '}   
          </div>
          <div className="flex-avatar">
            <img className="avatar" src={me} />
          </div>
        </div>
      </aside>
    )
  }
}