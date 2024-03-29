import Shortcut from "./Shortcut";

export default function ShortcutGroup({icon, groups}) {
    return (
      <>
        {
          groups.map((group, i) => {
            return (
              <div className="mb-2 pt-1" key={ i }>
                <p className="text-neutrals-dark-300">{ group.title }</p>
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
