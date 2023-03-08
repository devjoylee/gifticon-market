<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/612/612886.png" alt="Logo" width="50" >
  <h1>NiconNaecon</h1>
  <p>
    <a href="https://gifticon-market.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
    <div><a href="#Commit-Convention">Commit Convention</a></div>
</details>

## About The Project

> It is a mobile trading website which has various gift cards on sale. This project was developed under the given directions by the design guide from Figma and API written in JSON.

- Production Period : 2022.02.07 - 2022.02.12

### Team Members

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/LEEHYUNHO2001" style="color: #f1f1f1">
        <img src="https://avatars.githubusercontent.com/LEEHYUNHO2001" width="100px;" alt=""  /><br />
        <sub><b>Hyunho Lee (Leader)</b></sub>
      </a><br />
    </td>
    <td align="center">
      <a href="https://github.com/devjoylee" style="color: #f1f1f1">
        <img src="https://avatars.githubusercontent.com/devjoylee" width="100px;" alt="" /><br />
        <sub><b>Joy Lee</b></sub>
      </a><br />
    </td>
    <td align="center">
      <a href="https://github.com/hoonjoo-park" style="color: #f1f1f1">
        <img src="https://avatars.githubusercontent.com/hoonjoo-park" width="100px;" alt="" /><br />
        <sub><b>Hoonju Park</b></sub>
      </a><br />
    </td>
    <td align="center">
      <a href="https://github.com/Yoon-CH" style="color: #f1f1f1">
        <img src="https://avatars.githubusercontent.com/Yoon-CH" width="100px;" alt="" /><br />
        <sub><b>Changhyun Yoon</b></sub>
      </a><br />
    </td>
  </tr>
</table>

| Member         | Role                              |
| -------------- | --------------------------------- |
| Hyunho Lee     | QnA Page / Side Navbar            |
| Joy Lee        | Dynamic Header / Router structure |
| Hoonju Park    | Detailed Page / Carousel          |
| Changhyun Yoon | Grid menu component / Footer      |

<br/>

### References

- [Design Guide - Figma](https://www.figma.com/file/kC5c9sPjKRQtk1H9P9yzit/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9?node-id=0%3A1)
- API Specification

  - Category List API
    :GET [https://api2.ncnc.app/con-category1s](https://api2.ncnc.app/con-category1s)

  - Items on sale List API
    :GET [https://api2.ncnc.app/con-items/soon](https://api2.ncnc.app/con-items/soon)

  - Items with brand List API
    :GET [https://api2.ncnc.app/con-category1s/$conCategory1Id/nested](https://api2.ncnc.app/con-category1s/67/nested)
  - Item details API
    :GET [https://api2.ncnc.app/con-items/](https://api2.ncnc.app/con-items/501)

  - FAQ types API
    :GET [https://api2.ncnc.app/qa-types](https://api2.ncnc.app/qa-types)

  - FAQ items API
    :GET [https://api2.ncnc.app/qas?qaTypeId=](https://api2.ncnc.app/qas?qaTypeId=1)

<br/>

## Built With

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;&nbsp;<img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=storybook&logoColor=white"/>

<br/>

## Getting Started

You are able to start the app by typing the following commands in the command line:

```bash
git clone https://github.com/devjoylee/niconnaecon.git
npm install
npm run dev
```

<br/>

## Main Features

### 1. Conditional Page Router

- Implemented conditional routing to the relevant page by saving query of a clicked component (Category Id → Brand Id → Item Id)
- Code Preview

```tsx
// components/common/ConCard.tsx
export const ConCard = ({ category }: CategoryProps) => {
  const router = useRouter();
  const categoryId = router.query.id;
  // if current data has item data, link to brand page. Or link to category page.
  const href = !!category.conItems
    ? `/brands/${category.id}`
    : `/categories/${category.id}`;
  return (
    <LinkBox>
      <Link
        href={{
          pathname: href,
          query: { categoryId: JSON.stringify(categoryId) },
        }}
        passHref
        key={category.id}
      >
        <div>
          <img src={category.imageUrl} />
          <span>{category.name}</span>
        </div>
      </Link>
    </LinkBox>
  );
};
```

### 2. Dynamic Header.

- When a page redirect, change a header name into the name of the current page from API data (it can be a category name, brand name or item name).
- Change the browser tab title with the `<Head>` tag as well as the header name.
- Code Preview

```tsx
// components/layout/Header.tsx
export const Header = ({ id }: Props) => {
  const categoryId = useRef(id);
  const { data } = useData(`con-category1s/${categoryId.current}/nested`);
  const brandTitle = useRef<Title[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (data && id === categoryId.current) {
      data.conCategory1.conCategory2s.map((brand: ConCategory2) => {
        brandTitle.current.push({ id: brand.id, name: brand.name });
      });
      setTitle(data.conCategory1.name);
    } else {
      brandTitle.current.forEach(
        brand => brand.id === Number(id) && setTitle(brand.name)
      );
      brandTitle.current = [];
    }
  }, [data, id, title]);

  return (
    <>
      <Head>
        <title>니콘내콘 - {title}</title>
      </Head>
      <HeaderContainer>
        <h2>{title}</h2>
      </HeaderContainer>
    </>
  );
};
```

### 3. Carousel on Main Page

- Implemented the carousel drag event using the difference in pageX value of the mouse event between `mouseDown` and `mouseUp`
- Code Preview

```tsx
// components/carousel/CarouselBox.tsx
export const CarouselBox = ({ currentIndex, setCurrentIndex }: Props) => {
  const [startX, setStartX] = useState(0);
  const CarouselBoxRef = useRef<HTMLDivElement>(null);
  const carouselLength = CAROUSEL_IMAGES.length - 1;

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    setStartX(e.pageX);
    return;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLUListElement>) => {
    const movedDistance = e.pageX - startX;
    if (Math.abs(movedDistance) >= 50) {
      setCurrentIndex(prev => (movedDistance > 0 ? prev - 1 : prev + 1));
      return;
    }
  };

  useEffect(() => {
    CarouselBoxRef.current!.style.transition = '0.2s';
  }, [currentIndex]);

  return (
    <CarouselBoxContainer currentIndex={currentIndex} ref={CarouselBoxRef}>
      <CarouselUl
        onMouseDown={e => handleMouseDown(e)}
        onMouseUp={e => handleMouseUp(e)}
      >
        // ...
      </CarouselUl>
    </CarouselBoxContainer>
  );
};
```

<br>

## Commit Convention

The commit message is written with the GITMOJI icons in order to make commit messages more intuitive.

| Gitmoji | Meaning                     |
| ------- | --------------------------- |
| 🎉      | Init or begin a project.    |
| 🚚      | Move or rename resources    |
| ✨      | Introduce new features      |
| 💄      | Add the UI and style files  |
| ♻️      | Refactor code               |
| 📝      | Add or update documentation |
| ➕      | Add a dependency            |
| 🐛      | Fix a bug                   |
| 🚀      | Deploy stuff                |

REFERENCE : Gitmoji (http://gitmoji.dev/)

<br/>

<p align="right">(<a href="#top">back to top</a>)</p>
