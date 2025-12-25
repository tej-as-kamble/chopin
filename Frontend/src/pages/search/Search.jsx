import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "@/components/Search/SearchBar";
import SearchSection from "@/components/Search/SearchSection";
import "@/components/Search/search.css";



const ITEMS = [
    { name: "pizza", restaurants: ["r1", "r2"] },
    { name: "burger", restaurants: ["r2"] },
    { name: "biryani", restaurants: ["r3"] },
    { name: "paneer", restaurants: ["r1", "r3"] },
];

const RESTAURANTS = {
    r1: {
        id: "r1",
        name: "Spice Hub",
        image:
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    r2: {
        id: "r2",
        name: "Burger Town",
        image:
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    r3: {
        id: "r3",
        name: "Biryani Palace",
        image:
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
};


const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialQuery = searchParams.get("q") || "";

    const [query, setQuery] = useState(initialQuery);
    const [searched, setSearched] = useState(false);
    const [results, setResults] = useState([]);


    useEffect(() => {
        if (initialQuery) {
            triggerSearch(initialQuery);
        }
    }, []);

    const triggerSearch = (value) => {
        const q = value.trim().toLowerCase();
        if (!q) return;

        setSearchParams({ q });
        setSearched(true);


        const matchedRestaurants = new Set();

        ITEMS.forEach(item => {
            if (item.name.includes(q)) {
                item.restaurants.forEach(r => matchedRestaurants.add(r));
            }
        });

        const finalResults = [...matchedRestaurants].map(
            id => RESTAURANTS[id]
        );

        setResults(finalResults);
    };

    return (
        <div className="search-page">
            <SearchBar
                query={query}
                setQuery={setQuery}
                onSearch={triggerSearch}
                items={ITEMS}
                searched={searched}
                setSearched={setSearched}
            />

            <SearchSection
                searched={searched}
                query={query}
                results={results}
            />
        </div>
    );
};

export default Search;
