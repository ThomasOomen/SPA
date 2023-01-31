import matplotlib.pyplot as plt, mpld3


class Chart:
    def __init__(self):
        pass

    def drawChart(dataSet):
        fig, ax = plt.subplots()
        ax.scatter([1, 10], [5, 9])
        html_graph = mpld3.fig_to_html(fig)
        return html_graph