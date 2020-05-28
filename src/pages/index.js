import React, { useState } from "react"
import { graphql } from "gatsby"
// import SmartDataTable from "react-smart-data-table"
import loadable from "@loadable/component"
import '../../node_modules/shoelace-css/dist/shoelace.css' 
import Header from '../components/header'

const OtherComponent = loadable(() => import("../components/smartDataTable"))



export default function Home({ data }) {
  const [filterValue, setFilterValue] = useState("")
  let urlvalue
  const headers = {
    "node.__typename": {
      invisible: true,
      sortable: false,
      filterable: false,
    },
    "node.name": {
      text: "Name",
    },
    "node.url": {
      invisible: false,
      transform: (value) => {
        urlvalue = value
      },
    },
    "node.openGraphImageUrl": {
      text: "Link",
      invisible: false,
      sortable: false,
      filterable: false,
      transform: (value) => {
        return <a href={urlvalue}><img className='thumb' alt='' src={value} /></a>
      },
    },
    "node.createdAt": {
      text: "Created",
      transform: value => {
        const date = new Date(value)
        return date.toLocaleString()
      },
    },
    "node.updatedAt": {
      text: "Last Updated",
      transform: value => {
        const date = new Date(value)
        return date.toLocaleString()
      },
    },
    "node.pullRequests.totalCount": {
      text: "Pull Requests",
      transform: value => {
        return Number(value).toLocaleString()
      },
    },
    "node.stargazers.totalCount": {
      text: "Stars",
      transform: value => {
        return Number(value).toLocaleString()
      },
    },
    "node.diskUsage": {
      text: "File Size",
      transform: value => {
        return `${Number(value).toLocaleString()} kB`
      },
    },
    "node.forkCount": {
      text: "Forks",
      transform: value => {
        return Number(value).toLocaleString()
      },
    },
    "node.description": {
      text: "Description",
      sortable: false,
    },
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-left">
            <Header />
          </div>
          <div className="col text-right">
            <label for="search">
              <span>Search</span>
              <input
                id="search"
                type="text"
                name="filterValue"
                value={filterValue}
                onChange={e => setFilterValue(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <OtherComponent
              data={data.github.search.edges}
              sortable
              filterable
              filterValue={filterValue}
              perPage={10}
              headers={headers}
            />
          </div>
        </div>
      </div>
    </>
  )
}


export const query = graphql`
  query DebtCollectiveGithubQuery {
    github {
      search(query: "org:debtcollective", type: REPOSITORY, first: 100) {
        repositoryCount
        edges {
          node {
            ... on GitHub_Repository {
              url
              name
              name
              openGraphImageUrl
              pullRequests {
                totalCount
              }
              stargazers {
                totalCount
              }
              forkCount
              diskUsage
              createdAt
              updatedAt
              description
            }
          }
        }
      }
    }
  }
`
