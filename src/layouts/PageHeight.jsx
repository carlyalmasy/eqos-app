export default function PageHeight(props) {
    return (
      <>
        <div style={{height: 'calc(100vh - 64px)'}}>
          {props.children}
        </div>
      </>
    )
  }
