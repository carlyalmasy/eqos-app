export default function PageContainer(props) {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {props.children}
      </div>
    </>
  )
}