import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Page not found 😒
      </h1>
      <Link to={"/"}>
        <button>Go Back Home</button>
      </Link>
    </>
  )
}
