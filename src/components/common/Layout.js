import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link, StaticQuery, graphql } from "gatsby"

// Styles
import "../../styles/app.css"

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node

    const commonLogoHeader = <svg width="150" height="66" viewBox="0 0 209 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <path d="M3.83899 22.2385C5.63992 22.2385 7.09986 20.7786 7.09986 18.9777C7.09986 17.1767 5.63992 15.7168 3.83899 15.7168C2.03807 15.7168 0.578125 17.1767 0.578125 18.9777C0.578125 20.7786 2.03807 22.2385 3.83899 22.2385Z" fill="black"/>
            <path d="M11.6691 22.2385C13.47 22.2385 14.9299 20.7786 14.9299 18.9777C14.9299 17.1767 13.47 15.7168 11.6691 15.7168C9.86815 15.7168 8.4082 17.1767 8.4082 18.9777C8.4082 20.7786 9.86815 22.2385 11.6691 22.2385Z" fill="black"/>
            <path d="M19.4855 22.2385C21.2864 22.2385 22.7463 20.7786 22.7463 18.9777C22.7463 17.1767 21.2864 15.7168 19.4855 15.7168C17.6845 15.7168 16.2246 17.1767 16.2246 18.9777C16.2246 20.7786 17.6845 22.2385 19.4855 22.2385Z" fill="black"/>
            <path d="M27.3156 22.2385C29.1165 22.2385 30.5764 20.7786 30.5764 18.9777C30.5764 17.1767 29.1165 15.7168 27.3156 15.7168C25.5146 15.7168 24.0547 17.1767 24.0547 18.9777C24.0547 20.7786 25.5146 22.2385 27.3156 22.2385Z" fill="black"/>
            <path d="M3.83899 30.0647C5.63992 30.0647 7.09986 28.6048 7.09986 26.8038C7.09986 25.0029 5.63992 23.543 3.83899 23.543C2.03807 23.543 0.578125 25.0029 0.578125 26.8038C0.578125 28.6048 2.03807 30.0647 3.83899 30.0647Z" fill="black"/>
            <path d="M19.4855 30.0647C21.2864 30.0647 22.7463 28.6048 22.7463 26.8038C22.7463 25.0029 21.2864 23.543 19.4855 23.543C17.6845 23.543 16.2246 25.0029 16.2246 26.8038C16.2246 28.6048 17.6845 30.0647 19.4855 30.0647Z" fill="black"/>
            <path d="M27.3156 30.0647C29.1165 30.0647 30.5764 28.6048 30.5764 26.8038C30.5764 25.0029 29.1165 23.543 27.3156 23.543C25.5146 23.543 24.0547 25.0029 24.0547 26.8038C24.0547 28.6048 25.5146 30.0647 27.3156 30.0647Z" fill="black"/>
            <path d="M3.83899 37.8928C5.63992 37.8928 7.09986 36.4329 7.09986 34.632C7.09986 32.831 5.63992 31.3711 3.83899 31.3711C2.03807 31.3711 0.578125 32.831 0.578125 34.632C0.578125 36.4329 2.03807 37.8928 3.83899 37.8928Z" fill="black"/>
            <path d="M11.6691 37.8928C13.47 37.8928 14.9299 36.4329 14.9299 34.632C14.9299 32.831 13.47 31.3711 11.6691 31.3711C9.86815 31.3711 8.4082 32.831 8.4082 34.632C8.4082 36.4329 9.86815 37.8928 11.6691 37.8928Z" fill="black"/>
            <path d="M27.3156 37.8928C29.1165 37.8928 30.5764 36.4329 30.5764 34.632C30.5764 32.831 29.1165 31.3711 27.3156 31.3711C25.5146 31.3711 24.0547 32.831 24.0547 34.632C24.0547 36.4329 25.5146 37.8928 27.3156 37.8928Z" fill="black"/>
            <path d="M3.83899 45.7151C5.63992 45.7151 7.09986 44.2552 7.09986 42.4542C7.09986 40.6533 5.63992 39.1934 3.83899 39.1934C2.03807 39.1934 0.578125 40.6533 0.578125 42.4542C0.578125 44.2552 2.03807 45.7151 3.83899 45.7151Z" fill="black"/>
            <path d="M11.6691 45.7151C13.47 45.7151 14.9299 44.2552 14.9299 42.4542C14.9299 40.6533 13.47 39.1934 11.6691 39.1934C9.86815 39.1934 8.4082 40.6533 8.4082 42.4542C8.4082 44.2552 9.86815 45.7151 11.6691 45.7151Z" fill="black"/>
            <path d="M19.4855 45.7151C21.2864 45.7151 22.7463 44.2552 22.7463 42.4542C22.7463 40.6533 21.2864 39.1934 19.4855 39.1934C17.6845 39.1934 16.2246 40.6533 16.2246 42.4542C16.2246 44.2552 17.6845 45.7151 19.4855 45.7151Z" fill="black"/>
            <path d="M27.3156 45.7151C29.1165 45.7151 30.5764 44.2552 30.5764 42.4542C30.5764 40.6533 29.1165 39.1934 27.3156 39.1934C25.5146 39.1934 24.0547 40.6533 24.0547 42.4542C24.0547 44.2552 25.5146 45.7151 27.3156 45.7151Z" fill="black"/>
            <path d="M11.6659 23.3829L8.24414 26.8047L11.6659 30.2264L15.0876 26.8047L11.6659 23.3829Z" fill="black"/>
            <path d="M19.4979 31.2091L16.0762 34.6309L19.4979 38.0526L22.9197 34.6309L19.4979 31.2091Z" fill="black"/>
        </g>
        <path d="M55.4261 45.2C61.9202 45.2 67.6174 41.3752 68.4143 33.8851H63.0357C62.3983 38.3473 59.0516 40.4987 55.4261 40.4987C50.3663 40.4987 47.2985 36.7537 47.2985 30.3791C47.2985 24.0444 50.3663 20.2595 55.4261 20.2595C58.8922 20.2595 61.8405 21.9726 62.8365 25.9567H68.2947C67.0597 18.9447 61.721 15.5582 55.4261 15.5582C47.2188 15.5582 41.6809 21.2156 41.6809 30.3791C41.6809 39.5425 47.3383 45.2 55.4261 45.2ZM81.0283 45.0406C87.2834 45.0406 91.4667 40.8174 91.4667 34.2835C91.4667 27.7496 87.2834 23.5264 81.0283 23.5264C74.7733 23.5264 70.5501 27.7496 70.5501 34.2835C70.5501 40.8174 74.7733 45.0406 81.0283 45.0406ZM81.0283 40.8971C77.7613 40.8971 75.6896 38.6262 75.6896 34.2835C75.6896 29.9408 77.7613 27.6699 81.0283 27.6699C84.2554 27.6699 86.367 29.9408 86.367 34.2835C86.367 38.6262 84.2554 40.8971 81.0283 40.8971ZM118.083 23.5264C115.214 23.5264 113.063 25.1599 111.708 27.3512C110.672 25.0005 108.481 23.5264 105.334 23.5264C102.624 23.5264 100.712 24.9607 99.4769 26.9528V24.0045H94.6163V44.5625H99.6363V33.2476C99.6363 29.3831 101.748 27.8691 103.859 27.8691C106.25 27.8691 107.445 29.144 107.445 31.7735V44.5625H112.425V33.2476C112.425 29.3831 114.497 27.8691 116.688 27.8691C119.079 27.8691 120.234 29.144 120.234 31.7735V44.5625H125.254V30.9767C125.254 26.4348 122.664 23.5264 118.083 23.5264ZM152.788 23.5264C149.919 23.5264 147.768 25.1599 146.413 27.3512C145.378 25.0005 143.186 23.5264 140.039 23.5264C137.33 23.5264 135.417 24.9607 134.182 26.9528V24.0045H129.322V44.5625H134.342V33.2476C134.342 29.3831 136.453 27.8691 138.565 27.8691C140.955 27.8691 142.15 29.144 142.15 31.7735V44.5625H147.131V33.2476C147.131 29.3831 149.202 27.8691 151.394 27.8691C153.784 27.8691 154.939 29.144 154.939 31.7735V44.5625H159.959V30.9767C159.959 26.4348 157.37 23.5264 152.788 23.5264ZM173.589 45.0406C179.844 45.0406 184.027 40.8174 184.027 34.2835C184.027 27.7496 179.844 23.5264 173.589 23.5264C167.334 23.5264 163.111 27.7496 163.111 34.2835C163.111 40.8174 167.334 45.0406 173.589 45.0406ZM173.589 40.8971C170.322 40.8971 168.25 38.6262 168.25 34.2835C168.25 29.9408 170.322 27.6699 173.589 27.6699C176.816 27.6699 178.927 29.9408 178.927 34.2835C178.927 38.6262 176.816 40.8971 173.589 40.8971ZM198.452 23.5264C195.543 23.5264 193.352 25.0005 192.037 26.9528V24.0045H187.177V44.5625H192.197V33.0484C192.197 29.3831 194.587 27.8691 196.778 27.8691C199.328 27.8691 200.643 29.144 200.643 31.7735V44.5625H205.663V30.9369C205.663 26.0364 202.755 23.5264 198.452 23.5264Z" fill="black"/>
        <path d="M176.973 58.4782C177.813 58.0302 178.289 57.2882 178.289 56.2942C178.289 54.8802 177.323 53.6902 175.251 53.6902H171.107V63.6582H175.461C177.589 63.6582 178.695 62.5382 178.695 60.8582C178.695 59.8642 178.205 58.9402 176.973 58.4782ZM175.167 54.7542C176.497 54.7542 177.141 55.3982 177.141 56.3362C177.141 57.4002 176.497 58.0442 175.167 58.0442H172.283V54.7542H175.167ZM175.405 62.5942H172.283V59.0942H175.391C176.721 59.0942 177.519 59.6402 177.519 60.8582C177.519 61.9362 176.805 62.5942 175.405 62.5942ZM181.129 62.5942V53.6902H179.953V63.6582H186.141V62.5942H181.129ZM190.569 63.8822C193.467 63.8822 195.343 61.7682 195.343 58.6742C195.343 55.5802 193.467 53.4662 190.569 53.4662C187.671 53.4662 185.795 55.5802 185.795 58.6742C185.795 61.7682 187.671 63.8822 190.569 63.8822ZM190.569 62.8042C188.427 62.8042 187.027 61.2082 187.027 58.6742C187.027 56.1402 188.427 54.5442 190.569 54.5442C192.711 54.5442 194.111 56.1402 194.111 58.6742C194.111 61.2082 192.711 62.8042 190.569 62.8042ZM201.278 58.5342V59.5982H204.456C204.456 61.5022 202.902 62.8042 201.054 62.8042C198.94 62.8042 197.554 61.2082 197.554 58.6742C197.554 56.1402 198.926 54.5442 201.054 54.5442C202.622 54.5442 203.924 55.4542 204.19 56.9522H205.408C205.072 54.8802 203.462 53.4662 201.054 53.4662C198.17 53.4662 196.322 55.5802 196.322 58.6742C196.322 61.7682 198.184 63.8822 201.04 63.8822C202.482 63.8822 203.588 63.3082 204.302 62.3142L204.554 63.6582H205.52V58.5342H201.278Z" fill="black"/>
        <defs>
            <clipPath id="clip0">
                <rect width="30" height="30" fill="white" transform="translate(0.578125 15.7168)"/>
            </clipPath>
        </defs>
    </svg>

    const commonLogoFooter = <svg width="100" height="100" viewBox="0 0 209 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <path d="M4.23353 21.9456C6.03445 21.9456 7.49439 20.4856 7.49439 18.6847C7.49439 16.8838 6.03445 15.4238 4.23353 15.4238C2.4326 15.4238 0.972656 16.8838 0.972656 18.6847C0.972656 20.4856 2.4326 21.9456 4.23353 21.9456Z" fill="#F7F4FF"/>
            <path d="M12.0636 21.9456C13.8645 21.9456 15.3245 20.4856 15.3245 18.6847C15.3245 16.8838 13.8645 15.4238 12.0636 15.4238C10.2627 15.4238 8.80273 16.8838 8.80273 18.6847C8.80273 20.4856 10.2627 21.9456 12.0636 21.9456Z" fill="#F7F4FF"/>
            <path d="M19.88 21.9456C21.6809 21.9456 23.1409 20.4856 23.1409 18.6847C23.1409 16.8838 21.6809 15.4238 19.88 15.4238C18.0791 15.4238 16.6191 16.8838 16.6191 18.6847C16.6191 20.4856 18.0791 21.9456 19.88 21.9456Z" fill="#F7F4FF"/>
            <path d="M27.7101 21.9456C29.511 21.9456 30.971 20.4856 30.971 18.6847C30.971 16.8838 29.511 15.4238 27.7101 15.4238C25.9092 15.4238 24.4492 16.8838 24.4492 18.6847C24.4492 20.4856 25.9092 21.9456 27.7101 21.9456Z" fill="#F7F4FF"/>
            <path d="M4.23353 29.7717C6.03445 29.7717 7.49439 28.3118 7.49439 26.5109C7.49439 24.7099 6.03445 23.25 4.23353 23.25C2.4326 23.25 0.972656 24.7099 0.972656 26.5109C0.972656 28.3118 2.4326 29.7717 4.23353 29.7717Z" fill="#F7F4FF"/>
            <path d="M19.88 29.7717C21.6809 29.7717 23.1409 28.3118 23.1409 26.5109C23.1409 24.7099 21.6809 23.25 19.88 23.25C18.0791 23.25 16.6191 24.7099 16.6191 26.5109C16.6191 28.3118 18.0791 29.7717 19.88 29.7717Z" fill="#F7F4FF"/>
            <path d="M27.7101 29.7717C29.511 29.7717 30.971 28.3118 30.971 26.5109C30.971 24.7099 29.511 23.25 27.7101 23.25C25.9092 23.25 24.4492 24.7099 24.4492 26.5109C24.4492 28.3118 25.9092 29.7717 27.7101 29.7717Z" fill="#F7F4FF"/>
            <path d="M4.23353 37.5979C6.03445 37.5979 7.49439 36.138 7.49439 34.337C7.49439 32.5361 6.03445 31.0762 4.23353 31.0762C2.4326 31.0762 0.972656 32.5361 0.972656 34.337C0.972656 36.138 2.4326 37.5979 4.23353 37.5979Z" fill="#F7F4FF"/>
            <path d="M12.0636 37.5979C13.8645 37.5979 15.3245 36.138 15.3245 34.337C15.3245 32.5361 13.8645 31.0762 12.0636 31.0762C10.2627 31.0762 8.80273 32.5361 8.80273 34.337C8.80273 36.138 10.2627 37.5979 12.0636 37.5979Z" fill="#F7F4FF"/>
            <path d="M27.7101 37.5979C29.511 37.5979 30.971 36.138 30.971 34.337C30.971 32.5361 29.511 31.0762 27.7101 31.0762C25.9092 31.0762 24.4492 32.5361 24.4492 34.337C24.4492 36.138 25.9092 37.5979 27.7101 37.5979Z" fill="#F7F4FF"/>
            <path d="M4.23353 45.4241C6.03445 45.4241 7.49439 43.9641 7.49439 42.1632C7.49439 40.3623 6.03445 38.9023 4.23353 38.9023C2.4326 38.9023 0.972656 40.3623 0.972656 42.1632C0.972656 43.9641 2.4326 45.4241 4.23353 45.4241Z" fill="#F7F4FF"/>
            <path d="M12.0636 45.4241C13.8645 45.4241 15.3245 43.9641 15.3245 42.1632C15.3245 40.3623 13.8645 38.9023 12.0636 38.9023C10.2627 38.9023 8.80273 40.3623 8.80273 42.1632C8.80273 43.9641 10.2627 45.4241 12.0636 45.4241Z" fill="#F7F4FF"/>
            <path d="M19.88 45.4241C21.6809 45.4241 23.1409 43.9641 23.1409 42.1632C23.1409 40.3623 21.6809 38.9023 19.88 38.9023C18.0791 38.9023 16.6191 40.3623 16.6191 42.1632C16.6191 43.9641 18.0791 45.4241 19.88 45.4241Z" fill="#F7F4FF"/>
            <path d="M27.7101 45.4241C29.511 45.4241 30.971 43.9641 30.971 42.1632C30.971 40.3623 29.511 38.9023 27.7101 38.9023C25.9092 38.9023 24.4492 40.3623 24.4492 42.1632C24.4492 43.9641 25.9092 45.4241 27.7101 45.4241Z" fill="#F7F4FF"/>
            <path d="M12.0604 23.09L8.63867 26.5117L12.0604 29.9335L15.4822 26.5117L12.0604 23.09Z" fill="#F7F4FF"/>
            <path d="M19.8925 30.9161L16.4707 34.3379L19.8925 37.7596L23.3142 34.3379L19.8925 30.9161Z" fill="#F7F4FF"/>
        </g>
        <path d="M55.8206 44.907C62.3147 44.907 68.012 41.0822 68.8088 33.5921H63.4302C62.7928 38.0543 59.4461 40.2057 55.8206 40.2057C50.7608 40.2057 47.693 36.4607 47.693 30.0861C47.693 23.7514 50.7608 19.9665 55.8206 19.9665C59.2868 19.9665 62.235 21.6797 63.231 25.6638H68.6893C67.4542 18.6517 62.1155 15.2652 55.8206 15.2652C47.6133 15.2652 42.0754 20.9227 42.0754 30.0861C42.0754 39.2496 47.7329 44.907 55.8206 44.907ZM81.4228 44.7476C87.6779 44.7476 91.8612 40.5245 91.8612 33.9905C91.8612 27.4566 87.6779 23.2335 81.4228 23.2335C75.1678 23.2335 70.9446 27.4566 70.9446 33.9905C70.9446 40.5245 75.1678 44.7476 81.4228 44.7476ZM81.4228 40.6042C78.1559 40.6042 76.0841 38.3332 76.0841 33.9905C76.0841 29.6479 78.1559 27.3769 81.4228 27.3769C84.65 27.3769 86.7615 29.6479 86.7615 33.9905C86.7615 38.3332 84.65 40.6042 81.4228 40.6042ZM118.477 23.2335C115.609 23.2335 113.457 24.8669 112.103 27.0582C111.067 24.7076 108.876 23.2335 105.728 23.2335C103.019 23.2335 101.106 24.6677 99.8714 26.6598V23.7115H95.0108V44.2695H100.031V32.9547C100.031 29.0901 102.142 27.5761 104.254 27.5761C106.644 27.5761 107.84 28.851 107.84 31.4806V44.2695H112.82V32.9547C112.82 29.0901 114.892 27.5761 117.083 27.5761C119.473 27.5761 120.629 28.851 120.629 31.4806V44.2695H125.649V30.6837C125.649 26.1418 123.059 23.2335 118.477 23.2335ZM153.182 23.2335C150.314 23.2335 148.163 24.8669 146.808 27.0582C145.772 24.7076 143.581 23.2335 140.433 23.2335C137.724 23.2335 135.812 24.6677 134.577 26.6598V23.7115H129.716V44.2695H134.736V32.9547C134.736 29.0901 136.848 27.5761 138.959 27.5761C141.35 27.5761 142.545 28.851 142.545 31.4806V44.2695H147.525V32.9547C147.525 29.0901 149.597 27.5761 151.788 27.5761C154.179 27.5761 155.334 28.851 155.334 31.4806V44.2695H160.354V30.6837C160.354 26.1418 157.764 23.2335 153.182 23.2335ZM173.983 44.7476C180.238 44.7476 184.422 40.5245 184.422 33.9905C184.422 27.4566 180.238 23.2335 173.983 23.2335C167.728 23.2335 163.505 27.4566 163.505 33.9905C163.505 40.5245 167.728 44.7476 173.983 44.7476ZM173.983 40.6042C170.716 40.6042 168.645 38.3332 168.645 33.9905C168.645 29.6479 170.716 27.3769 173.983 27.3769C177.21 27.3769 179.322 29.6479 179.322 33.9905C179.322 38.3332 177.21 40.6042 173.983 40.6042ZM198.846 23.2335C195.938 23.2335 193.747 24.7076 192.432 26.6598V23.7115H187.571V44.2695H192.591V32.7555C192.591 29.0901 194.982 27.5761 197.173 27.5761C199.723 27.5761 201.038 28.851 201.038 31.4806V44.2695H206.057V30.6439C206.057 25.7434 203.149 23.2335 198.846 23.2335Z" fill="#F7F4FF"/>
        <defs>
            <clipPath id="clip0">
                <rect width="30" height="30" fill="white" transform="translate(0.972656 15.4238)"/>
            </clipPath>
        </defs>
    </svg>
    
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header className="site-head" src="/src/images/header.svg">
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        {commonLogoHeader}
                                    </Link>
                                </div>
                                <div className="site-nav-right">
                                    {/* The navigation items as setup in Ghost */}
                                    { <a href="https://commonwealth.im" className="site-nav-item" target="_blank" rel="noopener noreferrer">Commonwealth</a>}
                                    { <a href="https://edgewa.re" className="site-nav-item" target="_blank" rel="noopener noreferrer">Edgeware</a>}
                                </div>
                            </div>
                            { isHome ?
                                <div className="site-banner">
                                    <p className="site-banner-desc">Where we talk about things</p> <b /> <p className="site-banner-desc"> we have in Common.</p>
                                </div> :
                                null}
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{commonLogoFooter}</Link> © 2021
                            </div>
                            <div className="site-foot-nav-right">
                                { <a href="https://commonwealth.im" className="site-nav-item" target="_blank" rel="noopener noreferrer">Commonwealth</a>}
                                { <a href="https://edgewa.re" className="site-nav-item" target="_blank" rel="noopener noreferrer">Edgeware</a>}
                                <div className="site-mast-right">
                                    { <a href="https://twitter.com/hicommonwealth" className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    { <a href="https://discord.gg/25K4NKvj4z" className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon-discord" src="https://img.icons8.com/ios/128/ffffff/discord-logo.png" alt="Discord" /></a>}
                                    { <a href="https://t.me/HiCommonwealth" className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="https://img.icons8.com/ios-filled/50/ffffff/telegram-app.png" alt="Telegram" /></a>}
                                    {/* <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a> */}
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
