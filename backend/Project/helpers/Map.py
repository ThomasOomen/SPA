import folium
import polyline

class Map:
    def __init__(self):
        pass

    def drawMap(mapPolyLine, lat, long):
        newMap = folium.Map(location=[lat, long], zoom_start=11)
        trail_coordinates = polyline.decode(mapPolyLine)
        folium.PolyLine(trail_coordinates, tooltip="Coast").add_to(newMap)

        return newMap
