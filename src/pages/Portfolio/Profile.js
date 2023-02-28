import React from "react";
import { format} from "date-fns";
import './Portfolio.css';

export default function Profile(props) {
  return (
    <div>
      <article className="p-3 bg-white rounded shadow">
      <article className="d-flex align-items-center justify-content-start">
      <div className=""> 
        <img className="rounded-circle shadow" src={props.owner.avatar_url} alt={props.owner.login}/>
      </div>
     <div className="m-2"> 
        <h2 className="text-capitalize mb-1">{props.owner.login} </h2>
        <p className="fs-6 mb-1 text-lowercase">{props.name}</p>
        
        {props.private? <p className="rounded py-1 px-2 bg-danger d-inline-block">Private</p> : 
        <p className="public rounded py-1 px-2 d-inline-block">Public</p>}
        </div>
      </article>

      <div className="">
          <p>
          This repository was created on {format(new Date(props.created_at), "dd MMMM yyyy")} by {props.owner.login}
          </p>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-between">
              <a className="underline text-sm" href={props.html_url} target="_blank" rel="noopener noreferrer">View repo</a>
              <ul className="list-unstyled text-left">
                <li>{props.stargazers_count.toLocaleString()} stars</li>
                <li>{props.watchers_count.toLocaleString()} watchers</li>
              </ul>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-between mt-1">
        {props.language && (
          <p className="py-1 px-2 text-white bg-info opacity-75 rounded d-inline-block">{props.language}</p>
        )}
          <p className="fs-6">{props.open_issues} issues</p>
      </div>
      </article>
    </div>
  )
}