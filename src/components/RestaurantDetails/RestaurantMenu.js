import MenuItem from "./MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RestaurantMenu = (props) => {
  const { title, items, categories } = props;
  // console.log(title, items, categories);

  return (
    <div style={{ width: "100%" }}>
      <Accordion
      defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3 className="font-bold text-lg">{`${title} (${items?.length})`}</h3>
        </AccordionSummary>

        {items ? (
          <AccordionDetails>
            {items?.map((item,i) => (
              <MenuItem key={`item${i+1}`} item={item.card.info} />
            ))}
          </AccordionDetails>
        ) : (
          categories?.map((item,i) => (
            <Accordion key={`categories${i+1}`}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails>
                {item.itemCards.map((item) => (
                  <MenuItem key={`item${i+1}`} item={item.card.info} />
                ))}
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Accordion>
    </div>
  );
};

export default RestaurantMenu;
