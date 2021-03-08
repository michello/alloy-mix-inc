import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "shards-react";
import "../styles/Navigation.css"

const Navigation = ({paths=[]}) => {
    return(
        <Breadcrumb>
            <BreadcrumbItem className="navigate-item">
                Navigate
            </BreadcrumbItem>
            <BreadcrumbItem>
                <a href="#">Home</a>
            </BreadcrumbItem>
            {
                paths.map((link) => {
                    {
                        return(
                            link.isActive ?
                                <BreadcrumbItem active>
                                    <Link to={link.url}>
                                        {link.pageName}
                                    </Link>
                                </BreadcrumbItem>:
                                <BreadcrumbItem>
                                    <Link to={link.url}>
                                        {link.pageName}
                                    </Link>
                                </BreadcrumbItem>
                        )
                    }
                })
            }
        </Breadcrumb>
    )
}

export default Navigation;