import Shortcut from "./Shortcut";

export default function ShortcutGroup({icon, groups}) {
    return (
      <>
        {
          groups.map((group, i) => {
            return (
              <div key={ i }>
                <h4>{ group.title }</h4>
                <ul>
                  {
                    group.items.map((item, i) => {
                      return (
                        <Shortcut key={ i } icon={ icon } item={ item } />
                      );
                    })
                  }
                </ul>
              </div>
            );
          })
        }
      </>
    )
  }