import Shortcut from "./Shortcut";

export default function ShortcutGroup({icon, groups}) {
    return (
      <>
        {
          groups.map((group, i) => {
            return (
              <div className="mb-6" key={ i }>
                <h4>{ group.title }</h4>
                <ul className="text-neutrals-dark-100">
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
