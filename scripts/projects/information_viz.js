import { get_link_url, section_expand } from "../utils.js";

var fig1_caption = "Fig #1: <i>Example Network Graph (GOT TV-Series Season 6</i>";
var objective_text = "<i>Network Visualizations of - The Game of Thrones</i> is an data visualization project consisting of a collection of several network visualizations showing the relationships between the characters of the fictional TV & Book series. The objective of this project is to experiment with, practice & apply data cleaning, munging & ETL techniques. This is just a fun fan data visualization project.";

var concept_idea_text = "The tv series - <i>The Game of Thrones</i> & the book series - <i>A song of Ice and Fire</i>, are set on the fictional continents of Westeros and Essos. These series’ both contain several characters & story lines simultaneously progressing throughout the series. As a fan of the Game of Thrones series I wanted to visualize the interactions between the characters that take place in the series and compare it with the ones in the books. Further, I also wanted to visualize the major locations in the game of thrones world where interaction between the characters happens through the series via map-hypergraph.";
var fig2_caption = "Fig #2: <i>Example Map HyperGraph (GOT TV-Series Season 6)</i>"

var datasets_text1 = "The primary base dataset was taken from the <i>networkofthrones</i> website, and I have constructed several datasets for different applications for creating the visualizations. The various datasets fall in the following categories:";
var datasets_text2 = "<b><i>networkofthrones</i> datasets:</b> These are the individual datasets which map the interactions between the characters in each season of the tv series and each book, downloaded directly from their website."
var datasets_text3 = "<b>Cumulative datasets:</b> These datasets are constructed to have the cumulative interactions between the characters of the series’, these datasets grow incrementally along with the series’ progression.";
var datasets_text4 = "<b>Modularity datasets:</b> These are the edges & nodes datasets resulting from clustering algorithms (from Gephi) applied on the original <i>networkofthrones</i> dataset, these datasets contain the modularity data features along with the original data.";
var datasets_text5 = "<b>Hypergraph datasets:</b> These are the resulting edges & nodes datasets after applying several data transformations on the modularity datasets, these contain the data features for creating hypergraphs.";

function main() {

    section_expand();

    $("#fig1-caption").html(fig1_caption);

    $("#objective-text").html(objective_text);

    $("#concept-idea-text").html(concept_idea_text);

    $("#fig2-caption").html(fig2_caption);

    $("#datasets-text1").html(datasets_text1);

    $("#datasets-text2").html(datasets_text2);

    $("#datasets-text3").html(datasets_text3);

    $("#datasets-text4").html(datasets_text4);

    $("#datasets-text5").html(datasets_text5);

}

main();