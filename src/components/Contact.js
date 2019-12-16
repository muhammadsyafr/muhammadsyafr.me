import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Kontak Syafrizal</h1>
        <p>Kalau ada perlu dengan saya silahkan hubungi saya lewat kontak dibawah, boleh melalui email, sosial media ataupun telegram. 
          Sebelum kirim pesan silahkan menulis salam dan tulis apa keperluannya. boleh bertanya seputar IT, sharing cerita dan pengalaman atau sekedar mengucapkan terimakasih.
          Saya tidak membalas pesan yang tidak didahulukan dengan salam, atau sekedar menulis test, p atau hanya mengirim titik. 
        </p>
        <p>You can find me around the web:</p>
        <ul>
          <li>
            <strong>Email</strong>: <a href="mailto:muhammadsyafr@gmail.com">muhammadsyafr@gmail.com</a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" href="https://twitter.com/muhammadsyafrzl">
              muhammadsyafrzl
            </a>
          </li>
          <li>
            <strong>LinkedIn</strong>:{' '}
            <a target="_blank" href="https://linkedin.com/in/muhammadsyafr">
              Muhammad Syafrizal
            </a>
          </li>
        </ul>
      </>
    )
  }
}