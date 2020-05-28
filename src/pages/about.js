import React from "react"
import Header from '../components/header'

export default function About() {
  return (
    <>
      <Header />
      <h1>About </h1>
      <p>
        Hi. I'm Kevin McGuire. I made this to show the folks at Debt Collective.
      </p>
      <p>
        It's a Gatbsy-powered site, deployed on Netlify. It connects to the
        Github GraphQL API and displays some data about the org's Github repos.
      </p>
      <p>
        You can sort the table by things that make sense (Name, stars, file
        size, etc) and not by things that wouldn't make sense (e.g. the
        descriptions). You can also search.
      </p>
      <p>
        I decided that this small project should just focus on being extremely
        practical. I could envision someone using this to see which repos are
        the most popular (stars? date updated?), to search for repos, or perhaps
        to see which ones need to have some pruning done (file size).
      </p>
      <p>
        In the interest of getting something presentable quickly, I looked
        through some different react libraries for rendering datatables. The
        most popular ones all seemed to render tables with divs, which I found
        very offputting, for semantic reasons as well as accessibility reasons.
        I suppose if you're careful with roles, you may be able to achieve
        something similar to native TRs, TDs, etc, but why reinvent the wheel?
        So I chose{" "}
        <a href="https://www.npmjs.com/package/react-smart-data-table">
          &quot;react-smart-data-table&quot;
        </a>
        , which seemed to meet most of my needs without too much fuss, plus, it
        outputs regular ol' table markup.
      </p>
      <p>
        For styling, I had recently read about shoelace.css and wanted to
        experiment with it. It does just what it says on the tin, which is
        basically just like bootstrap, but with less bloat. Not sure if I'd use
        it again, lately, I've been a big fan of tailwind, but I wanted to check
        it out.
      </p>
      <p>
        All in all, I think this is pretty cool, and I hope it gives you a sense
        of what kind of work I do.
      </p>
      <p>
        If you're curious, check out the rest of my work on{" "}
        <a href="http://kpmcguire.github.io">my website</a>, especially the
        &quot;projects&quot; section.
      </p>
      <p>Thanks!</p>
    </>
  )
}
