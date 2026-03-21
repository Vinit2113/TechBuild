import './detailedBreadCrumb.css'

const DetailedBreadCrumb = () => {
  return (
    <>
      <div className="breadcrumb">
        <span>Home</span> /
        <span> Components</span> /
        <span> Processors (CPUs)</span> /
        <span className="active"> Intel Core i9-13900K</span>
      </div>
    </>
  )
}

export default DetailedBreadCrumb