def create_class(class_name: str, number: int, property: str, value: str) -> str:
    # .mt5 { margin-top: 1.25 }
    return f".{class_name}-{number}" + " { " + f"{property}: {value};" + " }\n"


with open('utils.css', 'w+') as file:
    # margin
    for i in range(1, 17):
        mt = create_class('mt', i, 'margin-top', str(i * 0.25) + 'rem')
        mr = create_class('mr', i, 'margin-right', str(i * 0.25) + 'rem')
        mb = create_class('mb', i, 'margin-bottom', str(i * 0.25) + 'rem')
        ml = create_class('ml', i, 'margin-left', str(i * 0.25) + 'rem')

        file.write(mt)
        file.write(mr)
        file.write(mb)
        file.write(ml)
        file.write('\n')

    # padding
    for i in range(1, 17):
        pt = create_class('pt', i, 'padding-top', str(i * 0.25) + 'rem')
        pr = create_class('pr', i, 'padding-right', str(i * 0.25) + 'rem')
        pb = create_class('pb', i, 'padding-bottom', str(i * 0.25) + 'rem')
        pl = create_class('pl', i, 'padding-left', str(i * 0.25) + 'rem')

        file.write(pt)
        file.write(pr)
        file.write(pb)
        file.write(pl)
        file.write('\n')

    # rounder
    for i in range(1, 9):
        rounder = create_class('rounder', i, 'border-radius', str(i * 0.125) + 'rem')
        file.write(rounder)
